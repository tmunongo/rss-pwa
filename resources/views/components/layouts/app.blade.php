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
    name: null,
    token: null,
}">
    <!-- Sidebar -->
    <aside class="w-1/4 bg-gray-800 text-white p-4">
        <!-- Sidebar content goes here -->
        <ul class="space-y-2">
            <li><a href="/" class="hover:text-gray-300">Dashboard</a></li>
            <li><a href="/about" class="hover:text-gray-300">About</a></li>
            <!-- Add more sidebar links as needed -->
        </ul>
    </aside>

    <!-- Main Content Area -->
    <main
        class="w-3/4 p-4"
        x-init="if ($store.user.token === null) location.href = 'auth/login'">
        <!-- Main content goes here -->
        {{ $slot }}
    </main>
    <script>
        console.log($store.user);
        document.addEventListener('load', function() {
            if ($store.user.token === null) location.href = 'auth/login';
        })
    </script>
</body>
</html>
