<div {{ $attributes }} class="chat-card {{$addclass}}">
    
    <p class="chat-card-content">
        <strong class="font-bold">{{ $speaker }}</strong>: 
        {{ $slot }}
    </p>
</div>