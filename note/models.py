from django.db import models
import datetime


# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Todo(models.Model):
    task = models.CharField(max_length=150)
    is_done = models.BooleanField(default=False)
    deadline = models.DateField(default=datetime.date.today)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    priority = (
        ('C', 'Обычно'),
        ('B', 'Важно'),
        ('A', 'Срочно!'),
    )
    importance = models.CharField(max_length=1, choices=priority, default="C")

    def __str__(self):
        return self.task
    