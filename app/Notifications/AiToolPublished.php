<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AiToolPublished extends Notification
{
    use Queueable;

    protected $aiToolName;
    protected $aiToolId;

    /**
     * Create a new notification instance.
     */
    public function __construct($aiTool)
    {
        $this->aiToolName = $aiTool->name;
        $this->aiToolId = $aiTool->id;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
                    ->line('A new Ai tool have been published with name ' . $this->aiToolName)
                    ->action('Notification Action', route('tools.show', $this->aiToolId))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'type' => 'tool_publish',
            'title' => 'Tool Published',
            'data' => 'A new Ai tool have been published with name ' . $this->aiToolName,
            'notifiable' => $notifiable,
            'link' => route('tools.show', $this->aiToolId),
        ];
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toDatabase(object $notifiable): array
    {
        return [
            'type' => 'tool_publish',
            'title' => 'Tool Published',
            'data' => 'A new Ai tool have been published with name ' . $this->aiToolName,
            'notifiable' => $notifiable,
            'resource_link' => route('tools.show', $this->aiToolId),
            'link' => route('notification.show', $this->id),
        ];
    }
}
