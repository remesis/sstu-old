# Generated by Django 5.0.6 on 2024-05-16 09:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_journal_research_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='research',
            old_name='name',
            new_name='j_name',
        ),
    ]
