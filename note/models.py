from django.db import models


# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Todo(models.Model):
    task = models.CharField(max_length=150)
    is_done = models.BooleanField(default=False)
    deadline = models.DateField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    priority = (
        ('C', 'Обычно'),
        ('B', 'Важно'),
        ('A', 'Срочно!'),
    )
    importance = models.CharField(max_length=1, choices=priority)

    def __str__(self):
        return self.task
    