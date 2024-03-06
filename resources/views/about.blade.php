<x-layouts.app>
    <x-slot:title>
        About
    </x-slot>

    <button hx-get="/api/hello" hx-target="#reply">Say Hello!</button>
    <div id="reply">

    </div>
</x-layouts.app>
