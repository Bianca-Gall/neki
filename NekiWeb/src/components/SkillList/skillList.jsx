import React, { useState, useEffect } from "react";
import axios from "axios";
import "./skillList.css";
import Edit from "../Edit/edit";

function SkillList() {
  const [skills, setSkills] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await axios.get(
          "https://64d15f3bff953154bb7a4749.mockapi.io/skill"
        );
        setSkills(response.data);
      } catch (error) {
        console.error("Erro ao buscar as habilidades", error);
      }
    }

    fetchSkills();
  }, []);

  const handleRatingChange = (skillId, newRating) => {
    if (!editMode) return;

    const updatedSkills = skills.map((skill) =>
      skill.id === skillId ? { ...skill, rating: newRating } : skill
    );
    setSkills(updatedSkills);
  };

  const handleFavoritedChange = (skillId, newFavorited) => {
    if (!editMode) return;

    const updatedSkills = skills.map((skill) =>
      skill.id === skillId ? { ...skill, favorited: newFavorited } : skill
    );
    setSkills(updatedSkills);
  };

  return (
    <div>
      <div className="boxUp">
        <div className="skillTitle">
          <span className="title"> Lista de Habilidades</span>
        </div>
        <button title="Edite suas skill's!" 
        onClick={() => setEditMode(!editMode)} className="editButton">
          {editMode ? "Salvar" : "Editar"}
        </button>
      </div>
      <div className="skillBox">
        {skills.map(
          (skill) =>
            (editMode || skill.favorited) && (
              <div className="skillCard" key={skill.id}>
                <img
                  src={skill.image}
                  alt={skill.skill}
                  width="100"
                  height="100"
                />
                {skill.skill}
                <Edit
                  skillId={skill.id}
                  rating={skill.rating}
                  favorited={skill.favorited}
                  onRatingChange={handleRatingChange}
                  onFavoritedChange={handleFavoritedChange}
                  editMode={editMode}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default SkillList;
