export function Sidebar() {
    return (
        <div className="flex h-full flex-col p-4">
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-sm font-semibold">MCP Hub</div>
                    <div className="text-xs text-zinc-400">Frontend only</div>
                </div>

                <button
                    type="button"
                    className="rounded-md border border-zinc-800 px-3 py-1.5 text-xs text-zinc-200 hover:bg-zinc-900"
                >
                    New chat
                </button>
            </div>

            <div className="mt-4 h-px bg-zinc-800"/>

            <div className="mt-4 text-xs font-medium text-zinc-400">
                Conversations 
            </div>

            <div className="mt-2 flex-1 space-y-1 overflow-auto">
                <button
                    type="button" 
                    className="w-full rounded-md bg-zinc-900 px-3 py-2 text-left text-sm"
                >
                    Getting started
                </button>
                <button
                    type="button"
                    className="w-full rounded-md px-3 py-2 text-left text-sm text-zinc-300 hover:bg-zinc-900"
                >
                    Notes
                </button>
            </div>

            <div className="mt-4 text-xs font-medium text-zinc-400">
                Status: UI Scaffold
            </div>
        </div>
    )
}