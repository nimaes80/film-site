from rest_framework.permissions import SAFE_METHODS, BasePermission


class IsSuperUserOr403Forbidden(BasePermission):

	def has_permission(self, request, view):
		return (self.request.user and self.request.user.is_superuser)
	
	def has_object_permission(self, request, view, obj):
		return (self.request.user and self.request.user.is_superuser)


class IsSuperUserOrReadOnly(BasePermission):

	def has_permission(self, request, view):
		return (self.request.user and self.request.user.is_superuser or self.request.method in SAFE_METHODS)
	
	def has_object_permission(self, request, view, obj):
		return (self.request.user and self.request.user.is_superuser or self.request.method in SAFE_METHODS)


class IsSafeOr403Forbidden(BasePermission):

	def has_permission(self, request, view):
		return request.method in SAFE_METHODS
	
	def has_object_permission(self, request, view, obj):
		return request.method in SAFE_METHODS
