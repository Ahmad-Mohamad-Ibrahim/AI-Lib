{{-- default is false --}}
@props(['active' => false , 'type' => 'a'])

{{-- weird stuff going on here --}}
{{-- <{{$type}} {{ $attributes }}
    class="{{ $active ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-primary-tint-700 hover:text-white'}} rounded-md px-3 py-2 text-sm font-medium"
    aria-current="page">
    {{ $slot }}
</{{$type}}> --}}

{{-- Or use this --}}
@if ($type === 'a')
    <a {{ $attributes }}
        class="{{ $active ? 'bg-primary text-white' : 'text-white hover:bg-primary-tint-700 hover:text-white'}} rounded-md px-3 py-2 text-sm font-medium"
        aria-current="page">
        {{ $slot }}
    </a>
@else
    <button {{ $attributes }}
    class="{{ $active ? 'bg-primary text-white' : 'text-white hover:bg-primary-tint-700 hover:text-white'}} rounded-md px-3 py-2 text-sm font-medium"
    aria-current="page">
    {{ $slot }}
    </button>
@endif
