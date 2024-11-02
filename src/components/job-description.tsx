import { JobAgency } from "@/types/agencies.type";
import { getLanguage } from "@/utils/getLanguage";

export const JobDescription = ({ job }: { job: JobAgency }) => {
  return (
    <div id="details">
      <h2 className="text-center font-bold text-5xl my-12 text-gray-900">Detalles de la posición</h2>

      <div className="flex flex-col sm:grid mx-8 gap-2 sm:grid-cols-3 sm:mx-28 ">
        <div className="bg-gray-200 px-10 py-4 rounded-lg dark:bg-gray-800">
          <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text">
            Requisitos
          </h4>
          {job.years_experience?.from && job.years_experience?.to && (
            <p className="text-sm dark:text-gray-50">
              <span className="text-gray-900 font-bold dark:text-gray-50"> Años de experiencia: </span>
              <span className="text-gray-900 dark:text-gray-50">
                {job.years_experience.from} - {job.years_experience.to}
              </span>
            </p>
          )}

          {job.contract_type && (
            <p className="text-sm dark:text-gray-50">
              <span className="text-gray-900 font-bold dark:text-gray-50">Tipo de contrato: </span>
              <span className="text-gray-900 lowercase dark:text-gray-50">{job.contract_type}</span>
            </p>
          )}

          {job.languages && (
            <p className="text-sm gap-2 flex dark:text-gray-50">
              <span className="text-gray-900 font-bold dark:text-gray-50">Idiomas: </span>
              <span className="text-gray-900 capitalize dark:text-gray-50">
                {job.languages.map((language, idx) => (
                  <p key={idx}>
                    {getLanguage(language.code)} - {language.proficiency}
                  </p>
                ))}
              </span>
            </p>
          )}
        </div>
        {job.hard_skills && (
          <div className="bg-gray-200 px-10 py-4 rounded-lg dark:bg-gray-800">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text">
              Hard skills
            </h4>
            {job.hard_skills.map((hardSkill) => (
              <ul key={hardSkill.id}>
                <li className="text-gray-900 text-sm dark:text-gray-50">{hardSkill.name}</li>
              </ul>
            ))}
          </div>
        )}

        {job.soft_skills && (
          <div className={`bg-gray-200 px-10 py-4 rounded-lg ${job.benefits ? "sm:row-span-2" : ""} dark:bg-gray-800`}>
            <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text">
              Soft skills
            </h4>
            {job.soft_skills.map((softSkill) => (
              <ul key={softSkill.id}>
                <li className="text-gray-900 text-sm dark:text-gray-50">{softSkill.name}</li>
              </ul>
            ))}
          </div>
        )}

        {job.benefits && (
          <div className="bg-gray-200 px-10 py-4 rounded-lg col-span-2 dark:bg-gray-800">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text">
              Beneficios
            </h4>
            {job.benefits.map((benefit, idx) => (
              <ul key={idx}>
                <li className="text-gray-900 text-sm dark:text-gray-50">{benefit}</li>
              </ul>
            ))}
          </div>
        )}
        {job.expected_salary?.amount && (
          <div className="bg-gray-200 px-10 py-4 rounded-lg dark:bg-gray-800">
            <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text">
              Salario
            </h4>
            <ul>
              <li className="text-gray-900 text-sm dark:text-gray-50">
                {job.expected_salary.amount} - {job.expected_salary.currency}
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="my-20 bg-gray-50 px-10 sm:px-32 dark:bg-gray-900">
        <h3 className="text-2xl font-bold my-4">¿Todo listo para tu nueva aventura?</h3>
        <p dangerouslySetInnerHTML={{ __html: job.job_description }}></p>
      </div>
    </div>
  );
};
