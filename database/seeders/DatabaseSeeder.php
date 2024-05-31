<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // run seeders
        $this->call([
            UserSeeder::class,
            CategorySeeder::class,
            AiToolSeeder::class,
            GallerySeeder::class,
        ]);
    }

}
