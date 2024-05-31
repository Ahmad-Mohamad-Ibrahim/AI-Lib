<?php

namespace Database\Seeders;

use App\Models\AiTool;
use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class AiToolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = File::get(public_path("data/ai-tools.json"));
        $tools = json_decode($json, true);

        // seed ai tools
        foreach ($tools as $tool) {
            // note better to use Repository for creation
            $toolModel = new AiTool();
            $toolModel->name = $tool['name'];
            $toolModel->description = $tool['description'];
            $toolModel->website = $tool['website'];
            $toolModel->is_accessible = $tool['is_accessible'];
            $toolModel->is_verified = $tool['is_verified'];
            $toolModel->launch_date = $tool['launch_date'];
            $toolModel->rating = $tool['rating'];
            if ($tool['image']) {
                try {
                    $thumbnail = file_get_contents($tool['image']);

                    $splitted = explode('.', $tool['image']);
                    $thumbnail_path = 'tools/' .  ($tool['name'] . "." . $splitted[sizeof($splitted) - 1]);
                    Storage::disk('public')->put($thumbnail_path, $thumbnail);
                    print(".");
                    $toolModel->image = $thumbnail_path;
                } catch (\Exception $e) {
                    print("Exception Occured when downloading {$tool['image']} {$e}");
                }
            }
            // associate tool with a category
            $category = Category::where('name', $tool['category'])->first();
            if ($category)
                $toolModel->category()->associate($category);
            else {
                $toolModel->category()->associate(Category::where('name', 'Other')->first());
            }

            $toolModel->save();
        }
    }
}
