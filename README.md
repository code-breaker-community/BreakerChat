# 🚀 Breaker Chat

**Breaker Chat** est une application de messagerie moderne basée sur **Flask** avec un frontend en **HTML, CSS et JavaScript**.  
Elle permet une communication fluide et sécurisée, avec une architecture adaptée au développement collaboratif.  

---

## ✨ Fonctionnalités principales
- 💬 Messagerie en temps réel (via Flask-SocketIO ou AJAX)  
- 👥 Gestion des utilisateurs, rôles et groupes de discussion  
- 🔒 Authentification sécurisée (sessions / JWT)  
- 📱 Interface responsive en HTML, CSS & JS pur  
- 🗄️ Base de données **SQLite** en développement et **MySQL** en production  

---

## 🛠️ Stack technique
- **Frontend** : HTML / CSS / JavaScript  
- **Backend** : Python / Flask  
- **Base de données** : SQLite (dev), MySQL (prod)  
- **Authentification** : Flask-Login / JWT  
- **Déploiement** : GitHub / Docker / Heroku ou VPS  

---

## 👨‍💻 Équipe de développement

Chaque membre peut ajouter son **nom** et son **rôle** ci-dessous.  

### 🎨 Frontend
| Nom            | Rôle |
|----------------|------|
| Exemple Nom 1  | Intégration HTML/CSS |
| Exemple Nom 2  | Développeur JS (interactions & API) |

### 🖥️ Backend
| Nom            | Rôle |
|----------------|------|
| Exemple Nom 3  | Développeur Flask |
| Exemple Nom 4  | Base de données (SQLite / MySQL) |

---

## 🎯 Objectif du projet
Développer une plateforme de chat :  
- Simple et moderne pour les utilisateurs finaux  
- Sécurisée grâce à une bonne gestion des comptes et des données  
- Évolutive avec une séparation claire du frontend et backend  

---

## 🚀 Installation & lancement (exemple avec Flask + SQLite)

```bash
# Cloner le dépôt
git clone https://github.com/username/breaker-chat.git

# Aller dans le dossier
cd breaker-chat

# Créer un environnement virtuel
python -m venv venv

# Activer l'environnement (Windows)
venv\Scripts\activate

# Activer l'environnement (Linux/Mac)
source venv/bin/activate

# Installer les dépendances
pip install -r requirements.txt

# Lancer l'application Flask
flask run
