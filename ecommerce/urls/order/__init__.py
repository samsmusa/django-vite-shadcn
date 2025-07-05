from .public import urlpatterns as public_urlpatterns
from .private import urlpatterns as private_patterns
from .protected import urlpatterns as protected_urlpatterns

urlpatterns = public_urlpatterns + private_patterns + protected_urlpatterns