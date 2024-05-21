<section class="flex justify-evenly gap-2 bg-gradient-to-r from-primary-shade-200 via-secondary to-accent p-8">
    <x-card-container>
        <x-slot:addclass>max-w-[20%] bg-secondary w-[25%]</x-slot:addclass>

        <x-chat-card>
            <x-slot:addclass>invisible</x-slot:addclass>
            <x-slot:speaker>
                Me
            </x-slot:speaker>
            Hi
        </x-chat-card>

        <x-chat-card>
            <x-slot:addclass>invisible</x-slot:addclass>
            <x-slot:speaker>
                GPT 3
            </x-slot:speaker>
            Hello
        </x-chat-card>

        <x-chat-card>
            <x-slot:addclass>invisible</x-slot:addclass>
            <x-slot:speaker>
                Me
            </x-slot:speaker>
            How's it going ?
        </x-chat-card>

        <x-chat-card>
            <x-slot:addclass>invisible</x-slot:addclass>
            <x-slot:speaker>
                GPT 3
            </x-slot:speaker>
            Great !. What is your question ?
        </x-chat-card>
        <x-slot:addclass>max-w-[20%] bg-secondary w-[25%]</x-slot:addclass>

        <x-chat-card>
            <x-slot:addclass>invisible</x-slot:addclass>
            <x-slot:speaker>
                Me
            </x-slot:speaker>
            How to create a Laravel project ?
        </x-chat-card>

        <x-chat-card>
            <x-slot:addclass>invisible</x-slot:addclass>
            <x-slot:speaker>
                GPT 3
            </x-slot:speaker>
            composer create-project laravel/laravel {app-name}
        </x-chat-card>

        <x-chat-card>
            <x-slot:addclass>invisible</x-slot:addclass>
            <x-slot:speaker>
                Me
            </x-slot:speaker>
            Well, thanks.
        </x-chat-card>

        <x-chat-card>
            <x-slot:addclass>invisible</x-slot:addclass>
            <x-slot:speaker>
                GPT 3
            </x-slot:speaker>
            Your welcome
        </x-chat-card>
    </x-card-container>
</section>
