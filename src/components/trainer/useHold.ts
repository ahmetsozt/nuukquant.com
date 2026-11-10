"use client";

import { useCallback, useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent, type PointerEvent as ReactPointerEvent, type SyntheticEvent } from "react";
import type { Dir, Hold } from "@/lib/trainer/types";

const KEY_DIRS: Readonly<Record<string, Dir>> = { arrowup: 1, w: 1, arrowdown: -1, s: -1 };
const BUTTON_KEYS = new Set([" ", "enter"]);

/** True when the key press belongs to a text field, so W / S and the arrows stay with it. */
function isTyping(target: EventTarget | null): boolean {
  return target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));
}

export interface HoldHandlers {
  onPointerDown: (event: ReactPointerEvent<HTMLButtonElement>) => void;
  onPointerUp: () => void;
  onPointerCancel: () => void;
  onLostPointerCapture: () => void;
  onContextMenu: (event: SyntheticEvent) => void;
  onKeyDown: (event: ReactKeyboardEvent<HTMLButtonElement>) => void;
  onKeyUp: (event: ReactKeyboardEvent<HTMLButtonElement>) => void;
}

/**
 * Hold-to-ride input: the two on-screen keys (touch or mouse) and the keyboard
 * (arrows or W / S). One direction is held at a time; losing focus or hiding
 * the tab lets go.
 */
export function useHold(enabled: boolean): { getHold: () => Hold; bind: (dir: Dir) => HoldHandlers } {
  const held = useRef<Hold>(0);

  useEffect(() => {
    if (!enabled) return;
    const down = (event: KeyboardEvent) => {
      const dir = KEY_DIRS[event.key.toLowerCase()];
      if (!dir || event.metaKey || event.ctrlKey || event.altKey || isTyping(event.target)) return;
      event.preventDefault();
      if (!event.repeat) held.current = dir;
    };
    const up = (event: KeyboardEvent) => {
      if (KEY_DIRS[event.key.toLowerCase()] === held.current) held.current = 0;
    };
    const drop = () => {
      held.current = 0;
    };
    const hidden = () => {
      if (document.hidden) drop();
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    window.addEventListener("blur", drop);
    document.addEventListener("visibilitychange", hidden);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
      window.removeEventListener("blur", drop);
      document.removeEventListener("visibilitychange", hidden);
      drop();
    };
  }, [enabled]);

  const getHold = useCallback((): Hold => held.current, []);

  const bind = useCallback((dir: Dir): HoldHandlers => {
    const release = () => {
      if (held.current === dir) held.current = 0;
    };
    return {
      onPointerDown: (event) => {
        if (event.button !== 0) return;
        event.preventDefault();
        event.currentTarget.setPointerCapture?.(event.pointerId);
        held.current = dir;
      },
      onPointerUp: release,
      onPointerCancel: release,
      onLostPointerCapture: release,
      onContextMenu: (event) => event.preventDefault(),
      onKeyDown: (event) => {
        if (!BUTTON_KEYS.has(event.key.toLowerCase())) return;
        event.preventDefault();
        event.stopPropagation();
        if (!event.repeat) held.current = dir;
      },
      onKeyUp: (event) => {
        if (BUTTON_KEYS.has(event.key.toLowerCase())) release();
      },
    };
  }, []);

  return { getHold, bind };
}
