import React from "react";
import {
  Mic,
  Video,
  PhoneOff,
  MicOff,
  VideoOff,
  Users,
  MonitorUp,
  Copy,
} from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useParams } from "next/navigation";
import CopyToClipboard from "react-copy-to-clipboard";

const BottomControl = ({
  muted,
  playing,
  isScreenSharing,
  toggleAudio = () => void 0,
  toggleVideo = () => void 0,
  leaveRoom = () => void 0,
  setShow = () => void 0,
  toggleScreenSharing = () => void 0,
  show,
}) => {
  return (
    <div className="flex relative gap-8 justify-center z-50 bg-[#121B21] shadow-sm p-4 border border-gray-800">
      <div className="absolute left-5 top-2 text-white text-sm">
        <p>Room Code </p>
        <CopyToClipboard text={useParams().id}>
          <p className="flex gap-2 items-center p-2 bg-[#27303F] rounded-md cursor-pointer">
            {useParams().id} <Copy size={15} />
          </p>
        </CopyToClipboard>
      </div>
      <button
        className={twMerge(
          `bg-[#27303F] text-white border border-gray-600 rounded-lg px-5 py-3 cursor-pointer  hover:bg-blue-500 hover:text-white transition duration-150 ${
            muted && "bg-blue-500 text-white "
          }`
        )}
        onClick={toggleAudio}
      >
        {muted ? <MicOff size={17} /> : <Mic size={17} />}
      </button>
      <button
        className={twMerge(
          `bg-[#27303F] text-white border border-gray-600 rounded-lg px-5 py-3 cursor-pointer  hover:bg-blue-500 hover:text-white transition duration-150 ${
            !playing && "bg-blue-500 text-white"
          }`
        )}
        onClick={toggleVideo}
      >
        {playing ? <Video size={17} /> : <VideoOff size={17} />}
      </button>
      <button
        className={`bg-[#27303F] text-white border border-gray-600 rounded-lg px-5 py-3 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-150 ${
          isScreenSharing && "bg-blue-500 text-white"
        }`}
        onClick={toggleScreenSharing}
      >
        <MonitorUp size={17} />
      </button>
      <button
        className={`bg-red-500 text-white border border-gray-600 rounded-lg px-5 py-3 cursor-pointer hover:bg-[red] hover:text-white transition duration-150 `}
        onClick={leaveRoom}
      >
        <PhoneOff size={17} />
      </button>
      <button
        className={`bg-[#27303F] text-white border border-gray-600 rounded-lg px-5 py-3 cursor-pointer hover:bg-blue-500 hover:text-white transition duration-150 `}
        onClick={() => setShow(!show)}
      >
        <Users size={17} />
      </button>
    </div>
  );
};

export default BottomControl;
