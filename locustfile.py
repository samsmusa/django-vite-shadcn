from locust import HttpUser, task, between

class LoadTest(HttpUser):
    wait_time = between(1, 2)

    @task
    def call_sync_view(self):
        self.client.get("/sync/")

    @task
    def call_async_view(self):
        self.client.get("/async/")

class ProductUser(HttpUser):
    wait_time = between(1, 2)

    @task
    def get_expensive_products(self):
        self.client.get("/api/products/expensive/")