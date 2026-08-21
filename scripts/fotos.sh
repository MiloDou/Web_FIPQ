#!/usr/bin/env bash
set -e

ACTION=$1
ARCHIVE="Contenido-protegido.enc"
FOLDER="Contenido"

if [ "$ACTION" = "encriptar" ]; then
  echo "🔒 Cifrando la carpeta '$FOLDER'..."
  if [ ! -d "$FOLDER" ]; then
    echo "❌ Error: La carpeta '$FOLDER' no existe."
    exit 1
  fi
  tar -czf - "$FOLDER" | openssl enc -aes-256-cbc -salt -pbkdf2 -out "$ARCHIVE"
  echo "✅ ¡Fotografías cifradas con éxito en '$ARCHIVE'!"
  echo "💡 Puedes guardar '$ARCHIVE' en tu repositorio de forma segura."

elif [ "$ACTION" = "desencriptar" ]; then
  echo "🔓 Descifrando '$ARCHIVE'..."
  if [ ! -f "$ARCHIVE" ]; then
    echo "❌ Error: No se encontró el archivo cifrado '$ARCHIVE'."
    exit 1
  fi
  openssl enc -d -aes-256-cbc -pbkdf2 -in "$ARCHIVE" | tar -xzf -
  echo "✅ ¡Fotografías restauradas con éxito en la carpeta '$FOLDER'!"

else
  echo "Uso: ./scripts/fotos.sh [encriptar|desencriptar]"
  exit 1
fi
