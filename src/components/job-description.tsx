import { JobAgency } from "@/types/agencies.type";
import { getLanguage } from "@/utils/getLanguage";

export const JobDescription = ({ job }: { job: JobAgency }) => {
  return (
    <div id="details">
      <h2 className="text-center font-bold text-5xl my-12 text-gray-900">Detalles de la posición</h2>

      <div className="flex flex-col sm:grid mx-8 gap-2 sm:grid-cols-3 sm:mx-28 ">
        <div className="bg-gray-200 px-10 py-4 rounded-lg">
          <h4 className="text-2xl font-bold">Requisitos</h4>
          {job.years_experience.from && job.years_experience.to && (
            <p className=" text-sm">
              <span className="text-gray-900 font-bold"> Años de experiencia: </span>
              <span className="text-gray-8000">
                {job.years_experience.from} - {job.years_experience.to}
              </span>
            </p>
          )}

          {job.contract_type && (
            <p className="text-sm">
              <span className="text-gray-900 font-bold">Tipo de contrato: </span>
              <span className="text-gray-8000 lowercase">{job.contract_type}</span>
            </p>
          )}

          {job.languages && (
            <p className="text-sm gap-2 flex">
              <span className="text-gray-900 font-bold">Idiomas: </span>
              <span className="text-gray-800 capitalize">
                {job.languages.map((language) => (
                  <p>
                    {getLanguage(language.code)} - {language.proficiency}
                  </p>
                ))}
              </span>
            </p>
          )}
        </div>
        {job.hard_skills && (
          <div className="bg-gray-200 px-10 py-4 rounded-lg">
            <h4 className="text-2xl font-bold">Hard skills</h4>
            {job.hard_skills.map((hardSkill) => (
              <ul key={hardSkill.id}>
                <li className="text-gray-900  text-sm">{hardSkill.name}</li>
              </ul>
            ))}
          </div>
        )}

        {job.soft_skills && (
          <div className={`bg-gray-200 px-10 py-4 rounded-lg ${job.benefits ? "sm:row-span-2" : ""}`}>
            <h4 className="text-2xl font-bold">Soft skills</h4>
            {job.soft_skills.map((softSkill) => (
              <ul key={softSkill.id}>
                <li className="text-gray-900 text-sm">{softSkill.name}</li>
              </ul>
            ))}
          </div>
        )}

        {job.benefits && (
          <div className="bg-gray-200 px-10 py-4 rounded-lg col-span-2">
            <h4 className="text-2xl font-bold">Beneficios</h4>
            {job.benefits.map((benefit, idx) => (
              <ul key={idx}>
                <li className="text-gray-900 text-sm">{benefit}</li>
              </ul>
            ))}
          </div>
        )}
        {job.expected_salary.amount && (
          <div className="bg-gray-200 px-10 py-4 rounded-lg">
            <h4 className="text-2xl font-bold">Salario</h4>
            <ul>
              <li className="text-gray-900 text-sm">
                {job.expected_salary.amount} - {job.expected_salary.currency}
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="my-20 bg-gray-50 px-10 sm:px-32">
        <h3 className="text-2xl font-bold">¿Todo listo para tu nueva aventura?</h3>
        <p dangerouslySetInnerHTML={{ __html: job.job_description }}></p>
      </div>
    </div>
  );
};
