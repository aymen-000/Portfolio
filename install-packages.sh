#!/bin/bash
packages=(
  "@emailjs/browser"
  "@tsparticles/engine"
  "@tsparticles/preset-confetti"
  "@tsparticles/react"
  "axios"
  "cors"
  "dotenv"
  "emailjs"
  "ember-tsparticles"
  "express"
  "flowbite-react"
  "framer-motion"
  "nodemailer"
  "react"
  "react-dom"
  "react-router-dom"
  "react-social-icons"
  "react-spring"
  "react-tsparticles"
  "react-type-animation"
  "tsparticles"
  "tsparticles-preset-sea-anemone"
)

for package in "${packages[@]}"
do
  echo "Installing latest version of $package"
  npm install "$package@latest"
done

