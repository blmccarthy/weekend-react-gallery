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
('bulbasaur', 'The seed on its back is filled with nutrients. The seed grows steadily larger as its body grows.', 'images/001-bulbasaur.gif', 0),
('ivysaur', 'Exposure to sunlight adds to its strength. Sunlight also makes the bud on its back grow larger.', 'images/002-ivysaur.gif', 0),
('venusaur', 'The flower on its back catches the suns rays. The sunlight is then absorbed and used for energy.', 'images/003-venusaur.gif', 0),
('charmander', 'The flame on its tail shows the strength of its life force. If it is weak, the flame also burns weakly.', 'images/004-charmander.gif', 0),
('charmeleon', 'It is very hotheaded by nature, so it constantly seeks opponents. It calms down only when it wins.', 'images/005-charmeleon.gif', 0),
('charizard', 'If Charizard becomes furious, the flame at the tip of its tail flares up in a whitish-blue color.', 'images/006-charizard.gif', 0),
('squirtle', 'The shell is soft when it is born. It soon becomes so resilient, prodding fingers will bounce off it.', 'images/007-squirtle.gif', 0),
('wartortle', 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.', 'images/008-wartortle.gif', 0),
('blastoise', 'It deliberately makes itself heavy so it can withstand the recoil of the water jets it fires.', 'images/009-blastoise.gif', 0);
