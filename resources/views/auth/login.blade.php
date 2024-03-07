<x-layouts.auth>
    <x-slot:title>
        Login - FeedReader
    </x-slot>

    <div>
        <div class="min-h-screen flex items-center justify-center">
        <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4">Login</h2>
            <!-- <form id="login-form" x-data="{ email: '', password: '' }" hx-post="/api/auth/login" > -->
            <form @submit.prevent="$dispatch('login', { email: $refs.email.value, password: $refs.password.value })">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" x-model="email" class="mt-1 p-2 w-full border rounded-md">
                </div>
                <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" x-model="password" class="mt-1 p-2 w-full border rounded-md">
                </div>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Login</button>
            </form>
        </div>
        </div>
    </div>
    <script>
        window.addEventListener('login', async (event) => {
            try {
              const response = await fetch('api/auth/login', {
                method: 'POST',
                body: JSON.stringify(event.detail),
                headers: { 'Content-Type': 'application/json' }
              });

             if (response.ok) {
                 const data = await response.json();
                window.Alpine.$store.user.login(data.token);
                // localStorage.setItem('bearerToken', data.token); // Replace with secure storage if needed
                // Trigger a redirect or event to handle successful login
                location.href = '/';
              } else {
                // Handle login errors
              }
            } catch (error) {
              // Handle errors during the fetch request
            }
        });
    </script>
</x-layouts.auth>
