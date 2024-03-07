<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title ?? 'FeedReader' }}</title>
    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/App.tsx'])
</head>
<body
class="flex h-screen"
x-data="{
    token: null,
}">
    <!-- Main Content Area -->
    <main class="w-1/2 m-auto p-4 rounded-md shadow-md">
        <!-- Main content goes here -->
        {{ $slot }}
    </main>
</body>
</html>
