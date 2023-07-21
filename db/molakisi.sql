-- phpMyAdmin SQL Dump
-- version 5.1.4deb1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 21 juil. 2023 à 19:19
-- Version du serveur : 8.0.33-0ubuntu0.22.10.2
-- Version de PHP : 8.1.7-1ubuntu3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `molakisi`
--

-- --------------------------------------------------------

--
-- Structure de la table `candidature`
--

CREATE TABLE `candidature` (
  `id` int NOT NULL,
  `nom` varchar(50) NOT NULL,
  `postnom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `sexe` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `montant` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `anneExp` varchar(50) NOT NULL,
  `file` varchar(100) NOT NULL,
  `cours` varchar(50) NOT NULL,
  `ecole` varchar(50) NOT NULL,
  `photo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `candidature`
--

INSERT INTO `candidature` (`id`, `nom`, `postnom`, `prenom`, `sexe`, `email`, `phone`, `montant`, `anneExp`, `file`, `cours`, `ecole`, `photo`) VALUES
(4, 'kongo', 'mpayate', 'herve', 'masculin', 'herve@gmail.com', '0812808199', '2 ans', '2', 'Ch1-Intro-IA-IFT6261-H-11.pdf', 'j', 'j', 'DSC_0371.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `tuteur`
--

CREATE TABLE `tuteur` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `tuteur`
--

INSERT INTO `tuteur` (`id`, `name`, `prenom`, `email`, `password`) VALUES
(1, 'kongo', 'herve', 'hervekongo.hk@gmail.com', '$2a$08$Typw.i.jnTWGlAwBCfTF1.tDzhsqekvfue5qbV9Se2oHzET8g6M7O'),
(2, 'masambukidi', 'herve', 'herve@gmail.com', '$2a$08$crquklaAAKbIuBL0e3mZ5OWCXZwxqUIMdSCS8V2LGs85XH0mPC6Xa'),
(3, 'masala', 'joyce', 'joyce2022@gmail.com', '$2a$08$XRjZfiyiBxWinji.T6QgCeIQ32kKsV366MFcnllWDU85K7Zj1tRqC'),
(4, 'samuela', 'herve', 'sam@gmail.com', '$2a$08$T6gvodP0kbyg9ajMbaJJP.jj4o271uCAK9pVMZcz9mKx0450NiIsa'),
(5, 'kadiebwe', 'oscar', 'kadiebweoscar0@gmail.com', '$2a$08$rUge6tN3S2uUWS4EORwEnO83MzHV2ZtRlhco4IPFb0RQQzKquMoie');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `name`, `prenom`, `email`, `password`) VALUES
(1, 'Masala', 'Huram', 'molakisibusinessgrouo@gmail.com', '$2a$08$TEEHRiFzecCl2Z2ZLKbNCOe2pB1F3FiDNVFxkNbfFFMC97h82BO9O'),
(2, 'masambukidi', 'samuela', 'samuela@gmail.com', '$2a$08$76RIc2OoL2vV157aSVZvuuB0UozDUCtjHc2/R3PO3pxHP6BQ07smq'),
(3, 'okito', 'micheline', 'okitobibi@gmail.com', '$2a$08$qEHkOh51EAK/.vYcO/t3XO.sK2Akbp4iG411Fh28dMO62tTzu2cjW'),
(4, 'simeon', 'tambu', 'si@gm', '$2a$08$PIiyq/U13ClLlVyjEp.OLedn7D4DrwDV68VMJQUHzivxwbOiOrvX6');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `gmail` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `candidature`
--
ALTER TABLE `candidature`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tuteur`
--
ALTER TABLE `tuteur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `candidature`
--
ALTER TABLE `candidature`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `tuteur`
--
ALTER TABLE `tuteur`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
