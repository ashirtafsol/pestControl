import React from "react";
import "./PestBio.css";

const bio = [
  {
    title: "Ants",
    details:
      "Ant Control - Pest Control around the houseThere are over 12,000 species of ants across the world. There are three types of ants. The queen ant, the male ant, and the worker ant. The queen and the male both have wings. When the queen starts a new colony, she loses her wings. (no more going out on the town, I guess!). The males mate with the queen and die. Ants are attracted to melons and sugary foods and substances. Finding an ant in the yard is different than finding one in the salad on your plate! Yet ants have their place in the ecosystem that we share. Ants play an important role in the environment. Ants turn and aerate the soil, allowing water and oxygen to reach plant roots. Talk with your Pest Control specialists to find out how to best treat areas where you don’t want ants.",
    image:
      "https://media.istockphoto.com/photos/ant-on-tree-branch-macro-picture-id1291970234?b=1&k=20&m=1291970234&s=170667a&w=0&h=8WoMSL6FVngB3SQCIlaCwXPlhtqwnbJfZZhasK8Fl1Q=",
  },
  {
    title: "Bats",
    details:
      "Personally, I have a love, hate relationship with bats! We love them because they feed off of insects like flies, mosquitoes, moths and other things we like even less than our bats! I like the bats around my house, but not on my house or near my front door. Come to think of it, over the years, I’ve known two families that have had problems with bats. Both bat friendly, both at the front door! It’s not the bats I mind, its the mess they leave. Remember, bats are protected during certain parts of the year. Check with your local pest control company for more details about local regulations. If you want to move your bats to a place that is more convenient for you, build ’em a house! Bat houses can be purchased online and nailed to a tree. This gives them a quiet dark place to sleep during the day, then come out an buzz around your lights in the evenings, picking off one moth after the next. Again, your local pest control company can consult you on where to best place the bat house. There are about 1,400 species of bats across the world, the smallest being a mere 1 1/8 inch long, to the largest having a wingspan up to 5 ft 7 inches, weighing about 3 1/2 lbs. Each species has it’s own diet.      ",
    image:
      "https://media.istockphoto.com/photos/flying-grey-long-eared-bat-in-forest-picture-id1126003482?k=20&m=1126003482&s=612x612&w=0&h=jA5iROBePrL96pEfosWBLqJneW_czaC6rtm_ji48F-g=",
  },
  {
    title: "Fleas",
    details:
      "Flea, the common name for the order Siphonaptera, includes 2,500 species of small flightless insects that survive as external parasites of mammals and birds. Fleas live by consuming blood, or hematophagy, from their hosts. Adult fleas grow to about 3 millimeters (1⁄8 inch) long, are usually brown, and have bodies that are “flattened” sideways or narrow, enabling them to move through their host’s fur or feathers. A flea can jump vertically up to 18 cm (7 in) and horizontally up to 33 cm (13 in) making the flea one of the best jumpers of all known animals (relative to body size), second only to the froghopper. Some species breed all year round while others synchronize their activities with their hosts’ life cycles or with local environmental factors and climatic conditions. Flea populations consist of roughly 50% eggs, 35% larvae, 10% pupae, and 5% adults.",
    image: "https://cdn.britannica.com/90/590-050-AF13D996/Flea.jpg",
  },
  {
    title: "Flies",
    details:
      "It is believed to have evolved in the Cenozoic Era, possibly in the Middle East, and has spread all over the world as a commensal of humans. It is the most common fly species found in houses. Adults are gray to black, with four dark, longitudinal lines on the thorax, slightly hairy bodies, and a single pair of membranous wings. Adult flies normally live for two to four weeks, but can hibernate during the winter. The adults feed on a variety of liquid or semi-liquid substances, as well as solid materials which have been softened by their saliva. They can carry pathogens on their bodies and in their feces, contaminate food, and contribute to the transfer of food-borne illnesses, while, in numbers, they can be physically annoying. For these reasons, they are considered pests.",
    image:
      "https://media.istockphoto.com/photos/blue-fly-with-red-eyes-on-blade-of-grass-picture-id115913666?k=20&m=115913666&s=612x612&w=0&h=hlaBFAxOvtPDC1MLT_EV21l7I_ATh27oYWq-1i7R_2Y=",
  },
  {
    title: "Ants",
    details:
      "Ant Control - Pest Control around the houseThere are over 12,000 species of ants across the world. There are three types of ants. The queen ant, the male ant, and the worker ant. The queen and the male both have wings. When the queen starts a new colony, she loses her wings. (no more going out on the town, I guess!). The males mate with the queen and die. Ants are attracted to melons and sugary foods and substances. Finding an ant in the yard is different than finding one in the salad on your plate! Yet ants have their place in the ecosystem that we share. Ants play an important role in the environment. Ants turn and aerate the soil, allowing water and oxygen to reach plant roots. Talk with your Pest Control specialists to find out how to best treat areas where you don’t want ants.",
    image:
      "https://media.istockphoto.com/photos/ant-on-tree-branch-macro-picture-id1291970234?b=1&k=20&m=1291970234&s=170667a&w=0&h=8WoMSL6FVngB3SQCIlaCwXPlhtqwnbJfZZhasK8Fl1Q=",
  },
];

function PestBio() {
  return (
    <div className="pestBio">
      {bio.map((data, index) => (
        <div className="pestBio__body">
          <div className="pestBio__left">
            <img className="pestBioImg" src={data.image} alt="" />
          </div>
          <div className="pestBio__right">
            <h3>{data.title}</h3>
            <p>{data.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PestBio;
