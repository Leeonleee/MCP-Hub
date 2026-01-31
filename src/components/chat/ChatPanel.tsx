export function ChatPanel() {
  return (
    <div className="flex h-full flex-col">
        <header className="border-b border-zinc-800 px-6 py-4">
            <div className="text-sm font-semibold">Getting started</div>
            <div className="text-xs text-zinc-400">
                Chat UI only
            </div>
        </header>

        <div className="flex-1 overflow-auto px-6 py-6">
            <div className="mx-auto max-w-3xl text-sm text-zinc-400">
                Message list goes here
            </div>
        </div>

        <div className="border-t border-zinc-800 px-6 py-4">
            <div className="mx-auto flex max-w-3xl gap-3">
                <textarea
                    className="min-h-[44px] flex-1 resize-none rounded-md border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-700"
                    placeholder="Type a message..."
                />
                <button
                    type="button" 
                    className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-white"
                >
                    Send
                </button>
            </div>
        </div>
    </div>
  )
}
