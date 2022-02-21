-- CREATE DATABASE "react_gallery";

-- Table structure
CREATE TABLE gallery (
	id SERIAL PRIMARY KEY,
	name VARCHAR(25) NOT NULL,
	description VARCHAR(150) NOT NULL,
	path VARCHAR(150) NOT NULL,
	likes INTEGER
);

INSERT INTO gallery (name, description, path, likes)
VALUES 
('Bulbasaur', 'The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.', 'images/001-bulbasaur.gif', 0),
('Ivysaur', 'Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.', 'images/002-ivysaur.gif', 0),
('Venusaur', 'The flower on its back catches the suns rays. The sunlight is then absorbed and used for energy.', 'images/003-venusaur.gif', 0),
('Charmander', 'The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.', 'images/004-charmander.gif', 0),
('Charmeleon', 'It is very hotheaded by nature, so it constantly seeks opponents. It calms down only when it wins.', 'images/005-charmeleon.gif', 0),
('Charizard', 'If Charizard becomes furious, the flame at the tip of its tail flares up in a whitish-blue color.', 'images/006-charizard.gif', 0),
('Squirtle', 'The shell is soft when it is born. It soon becomes so resilient, prodding fingers will bounce off it.', 'images/007-squirtle.gif', 0),
('Wartortle', 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.', 'images/008-wartortle.gif', 0),
('Blastoise', 'It deliberately makes itself heavy so it can withstand the recoil of the water jets it fires.', 'images/009-blastoise.gif', 0),
('Magikarp', 'An underpowered, pathetic Pokémon. It may jump high on rare occasions, but never more than seven feet.', 'https://img.pokemondb.net/sprites/black-white/anim/normal/magikarp.gif', 0);
