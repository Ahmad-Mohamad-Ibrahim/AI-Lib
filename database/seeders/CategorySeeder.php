<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seed the AI tools/ categories
        $json = File::get(public_path("data/categories.json"));
        $categories = json_decode($json, true);

        // seed categories
        foreach ($categories as $category) {
            // note better to use Repository for creation
            $catModel = Category::factory()->create([
                "name" => $category['name'],
            ]);
            // download image here
            // $catModel->image =
            if ($category['image']) {
                $thumbnail = file_get_contents($category['image']);
                $splitted = explode('.', $category['image']);
                $thumbnail_path = 'categories/' .  ($category['name'] . "." . $splitted[sizeof($splitted) - 1]);
                Storage::disk('public')->put($thumbnail_path, $thumbnail);
                print(".");
                $catModel->image = $thumbnail_path;
                $catModel->save();
            }
        }
    }
}
