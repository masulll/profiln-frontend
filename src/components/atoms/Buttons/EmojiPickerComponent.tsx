// components/EmojiPickerComponent.tsx
import React, { useState } from "react";
import dynamic from "next/dynamic";

import { IconEmoji } from "binar/helpers";
import { Overlay, Popover, Tooltip } from "react-bootstrap";
import { useModals } from "binar/contexts/ModalsContext";
// Load emoji-picker-react dynamically to avoid SSR issues
const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

const EmojiPickerComponent: React.FC = () => {
  const { onEmojiClick, showEmoji, refEmoji, targetEmoji } = useModals();

  return (
    <div>
      <Overlay
        show={showEmoji}
        target={targetEmoji}
        placement="left"
        container={refEmoji}
        containerPadding={30}
      >
        <Popover>
          <EmojiPicker
            onEmojiClick={(emojiObject) => onEmojiClick(emojiObject)}
            height="30em"
            width="20em"
          />
        </Popover>
      </Overlay>
    </div>
  );
};

export default EmojiPickerComponent;
