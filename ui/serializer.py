from rest_framework import serializers

from ui.models import UI


class UISerializer(serializers.ModelSerializer):
	class Meta:
		model = UI
		fields = '__all__'
