'use client';

import { useState } from 'react';

export const ClientBible=({ text }: { text: string })=> {
  const [current, setCurrent] = useState(text);

  return (
    <div className="p-4">
      <textarea
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        className="w-full h-32 p-2 border"
      />
      <p className="mt-4">현재 입력: {current}</p>
    </div>
  );
}
