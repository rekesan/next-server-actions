'use client'

import { useFormStatus } from "react-dom";

export function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md bg-black/80 px-4 py-2 text-white disabled:opacity-50"
    >
      Add todo
    </button>
  );
}
