{{-- default is false --}}
@props(['active' => false]) 
<a {{ $attributes }}
    class="{{ $active ? 'bg-primary text-white' : 'text-white hover:bg-primary-tint-700 hover:text-white'}} block rounded-md px-3 py-2 text-base font-medium"
    aria-current="page">
    {{ $slot }}
</a>
