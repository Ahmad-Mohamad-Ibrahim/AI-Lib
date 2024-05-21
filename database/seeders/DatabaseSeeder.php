<?php

namespace Database\Seeders;

use App\Models\AiTool;
use App\Models\Category;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // Seed the AI tools/ categories
        $json = File::get(public_path("data/categories.json"));
        $categories = json_decode($json , true);
        
        // seed categories
        foreach ($categories as $category) {
            // note better to use Repository for creation
            $catModel = Category::factory()->create([
                "name" => $category['name'],
            ]);
            // download image here
            // $catModel->image =
            if($category['image']) {
                $thumbnail = file_get_contents($category['image']);
                $splitted = explode('.', $category['image']);
                $thumbnail_path = 'categories/' .  ($category['name'] . "." . $splitted[sizeof($splitted) - 1]);
                Storage::disk('public')->put($thumbnail_path, $thumbnail);
                print(".");
                $catModel->image = $thumbnail_path;
                $catModel->save();
            } 
        }

        $json = File::get(public_path("data/ai-tools.json"));
        $tools = json_decode($json , true);
        
        // seed ai tools
        foreach ($tools as $tool) {
            // note better to use Repository for creation
            $toolModel = new AiTool();
            $toolModel->name = $tool['name'];
            $toolModel->description = $tool['description'];
            $toolModel->website = $tool['website'];
            $toolModel->launch_date = $tool['launch_date'];
            $toolModel->rating = $tool['rating'];
            // associate tool with a category
            $category = Category::where('name', $tool['category'])->first();
            if($category)
                $toolModel->category()->associate($category);
            else {
                $toolModel->category()->associate(Category::where('name', 'Other')->first());
            }
            $toolModel->save();
        }

    }
}
