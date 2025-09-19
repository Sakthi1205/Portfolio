# Containerized Portfolio Deployment

A personal portfolio website deployed using **Docker** and **Kubernetes** to showcase projects in a scalable and production-like environment.

## 🚀 Project Overview

**Problem:**  
Difficulty in showcasing projects with a scalable and reliable hosting setup.

**Approach:**  
Dockerized a personal portfolio and deployed it on a Kubernetes cluster (Minikube) using a NodePort service.

**Outcome:**  
Achieved smooth local deployment with browser access through Kubernetes service, enabling a production-like environment for testing and showcasing projects.

---

## 🛠️ Tech Stack
- **Docker** – Containerized the portfolio application  
- **Kubernetes** – Managed deployment and services  
- **Minikube** – Local Kubernetes cluster for testing  
- **NodePort** – Exposed the application for browser access  

---

## 📂 Project Structure




---

## ⚡ How to Run Locally

1. **Clone the repository**
   
git clone https://github.com/Sakthi1205/Portfolio.git
cd sakthi-portfolio

2. **Build Docker image**

docker build -t sakthi-portfolio:v1 .


3. **Run Minikube**

minikube start


4.**Deploy on Kubernetes**

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml


5. **Access Portfolio**

minikube service portfolio-service

