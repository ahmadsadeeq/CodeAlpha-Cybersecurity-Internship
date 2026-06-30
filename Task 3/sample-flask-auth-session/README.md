# Task 3 - Secure Coding Review

## Objective

The objective of this task was to perform a secure code review on a Flask authentication application to identify security vulnerabilities and recommend improvements.

## Application Reviewed

- Flask Authentication Sample
- Language: Python
- Framework: Flask

## Tools Used

- Bandit (Static Analysis)
- Manual Code Review
- Visual Studio Code

## Files Reviewed

- app/__init__.py
- app/config.py
- app/views.py
- app/models.py
- app/forms.py
- app/templates/login.html
- app/templates/register.html
- app/templates/index.html

## Security Findings

- Default SECRET_KEY
- User Enumeration
- Weak Password Validation
- Missing @login_required on Logout
- Automatic Database Creation
- Authentication Check Commented Out
- Unnecessary use of the Jinja2 `safe` filter

## Recommendations

- Store secrets in environment variables.
- Use stronger password validation.
- Return generic authentication error messages.
- Protect authenticated routes with `@login_required`.
- Remove unnecessary use of the `safe` filter.
- Use Flask-Migrate instead of `db.create_all()`.

## Static Analysis

Bandit was used to scan the application. No issues were reported. Manual review identified several security improvements that Bandit could not detect.
