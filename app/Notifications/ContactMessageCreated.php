<?php

namespace App\Notifications;

use App\Mail\ContactMessageMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ContactMessageCreated extends Notification
{
    use Queueable;
    protected $senderName;
    protected $senderEmail;
    protected $messageBody;


    /**
     * Create a new notification instance.
     */
    public function __construct($senderInfo)
    {
        $this->senderName = $senderInfo["name"];
        $this->senderEmail = $senderInfo["email"];
        $this->messageBody = $senderInfo["body"];
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
            ->line('email' . $this->senderName)
            ->line('A new message sent from ' . $this->senderName . " email: {$this->senderEmail}")
            // ->action('Notification Action', url('/'))
            ->line("Thank you for using our application!\nBest regards\nAI Arsenal");
        // return  new ContactMessageMail();
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'type' => 'contact_message_sent',
            'title' => 'Message sent',
            'data' => '' . $this->messageBody,
            'notifiable' => $notifiable,
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
            'type' => 'contact_message_sent',
            'title' => 'Message sent by ' . $this->senderName,
            'data' => '' . $this->messageBody,
            'notifiable' => $notifiable,
            'link' => route('notification.show', $this->id),
        ];
    }
}
