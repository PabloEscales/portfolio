import React from 'react';
// import { motion } from 'framer-motion';

type Props = {};

export default function ExperienceCard2({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[400px] xl:w-[700px] snap-center bg-[#292929] px-4 pb-2 pt-6 hover:opacity-100 opacity-70 transition-opacity duration-200 overflow-hidden text-gray-300">
    <img
      // initial={{
      //   y: -100,
      //   opacity: 0,
      // }}
      // transition={{ duration: 1.2 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      className="w-11 h-11 xl:w-[380px] xl:h-[100px] rounded object-cover object-center mb-4 mt-2"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAAAuCAYAAADqdL8HAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAiASURBVHhe7Zx3cBR1FMfPIEUIcCSAgOOMqAygSCcEyAViiErRPxTpSFGKM8KAQjqpJziQUC4hdEEpgVAtSBcjECJFAgjSa+iERCUhhfB873d7yebu9rhNc1jfm/mk7P5+7/Z2ft99v/L2p9MbjJ/pvaKD63WLCmAYRjuQrpHxOvyR6+5rAjefWIZhNIS771zQexnzdPpuUTfcvKdBPa8ohmG0BOoag/hNFjnDaBUWOcNoHBY5w2gcFjnDaBwWOcNoHBY5w2gcFjnDaBwWOVOR1O0aCbU6h8NzncIE9HcdPGavLFNBsMiZ8sTNEIUijoAqbYNB90Yg1ERhN3lzOjTrEyN4wXc61PIIF+dcsEydLhGijj1fFoSvVoGijmqwXtX2IeDmHQ36bpGgax2ExxHypwas49Im2O71OcLNEC0ebMV+ygH0o+paWORMeeLSOhhqdgyDt8YshTkr98HPBy/AhfQMuJuZLbiYfh9+OXQRTKtS4J1xy6CmR5higyVR1kUCZm+FhDUHID5RPQlrU2F0xEaojkJvgg+YGcuSxTG1zEeiF+6GBj2MqnoiNfAh5zF4nrgXsd/uhZhvys7cVfvBf9ZW4Z/uj/Vn2sAiZ8oKReLaGJEpwviN+Rp2p54HZ20PPgT88IGgaxUgegDyqE5Rno6dunhHKl06+yH5NOha+MMrvWMgv+CRdFS93c18AI17TgNXz/AS398RFHmHBSdJHsrPLt/ILLrv9j63BCxypixYGhpF49C4HfCo8LHUDJ23/EeFEDR3G9T2jBBjeItvi8hTj1+VSpbOkrafAF3LAGjaaybcy8qWjqo36oU08lUpchweDJiSKHkoPzt29iaLnKkcxDgXo5Vx0R6p+dnauav3IPnwRUjGbvrpy3ehoLBQOlPSDMMX4vg5tMi3ksgf43OEHiaFTvAYCyduPSZE/nLvmXA744Goa4GupZAcWpnlnLwsfY/GLHLm/4QbQhNSSo149ZY08B25CBr2+BJq4dibaNDdCN2GzIeY5Xsh8++HohxF8k+Nm8VYHtthkX8lkW/efRI8+8eB96jF0P0J+HyyBNr0M4leQgNvI3QdtgAMeE2GEWY8PjRBqGm75NlsufkFMBC/U5dB84rKeWOdzkMSwN1gnsCT3wdHsMiZpxqaNW6IoqUIJ7f8gkIYF7UJdK8FgAs2cop8NFlF0N/PtgvByOoPnQbGw46UszA2Esvi/3qrCS0lkSesSQVd00nggn7IlyOqtA0Rk180y00PEOopyM/rmn4OH0xcKXk2W3ZuATTrGwO65lOKy6KfalhXL7s+Z2CRM0811E0fF71ZanbFFpmwC3TNJgtRU0O0qSsdI9G4do6AGh2nYiO0jY5KIl+84ZDoQagVnD3Iz5DAtZJns+WgyNv2N0H1DsVDh9LCImeeWmjppipGtx+T/5SandnOXLoD9TBi1vQIF915Kku/qbwrRn6K5HIsCTKW/+WfoSTyResPil6CK56nRu6IJy13scgZRgES5ot+X0H67Syp2ZltJo61SYAlyqPo62N3ufGb06CRjwJ47nkcu1seDIRiJF9/CKq2ChQCptl4Jah7/qR1ZBY5wyhAXe2Og+Ihz2rdeaB/IjbswBJlaXntfRz3XriWAWev3IMzl+/acP5qBhw5mQ6v9okRvQCqpyTyOxkP4CAeO4zlHXH09A1Y/t0Rm6U5OSxyhlGgSrsQ6D5ykVimkpvv6KUiDVVeVtcqCIaHrJNKKFvOw3xo8d4s0YWnekoiV2NHTl0X437yI78mCyxyhlFAiHyErcj9xtoTeSCMDF0vlVC2jKxsaP5ubLmK/PCpdBY5i5wpDdVQAO37x0FuXoHU7Mz2UXASCqdkd71a+xDoiRF+0+6TsJHYdRLWbT0GB09ck2qZzVmRU9ZaGnbFj5+75RBKh12x5Sh311nkTGmgiTeaSKNUT7nNSzxgM/FGa9SuKLSS69OTxPhdbs6KfMnGQ1Adx/n0Zpm7A+p3NwohyK/FGhY5wyiA7QWqoNDW7TwhNTuzXbmRCY19pom1b/lMOUEz3RaoCz/MqgvvrMgX0hJaSyeW0PDBQj7k12ANi5xhHPCMHYGQxa1OEdlitC5uL5LSMRJpv8mli+ScDMMiZyqJ2p7hUAej5e+nrktNr9giEnaKlFLd64FQo9PUomQXivAUxekBQe+Uyy3rn4fQ0onZdRY5i5ypJKiRUW663+ilUPDI9s2yXannxYsezfvGikQXgnaH6TdxJWxPOSuVKrZ7mdnw0tszxEYS5J9FrmwscqbSIKFRtJ4w/Xup+dkavW1mSXq5/1eOdNTW6EUVmpSz+GaRKxuLnKlUaHmKuuAfh20Q0VitZWTlwKiw9cKHPA2VRa5sLHKm0hGbR2BEb9vPBKu2pMGDnDypOSrbQxRT0vbjYr2d6lq/p20RufX2T/SeOj0QykXk6GfkVNtEnfYD40Xqrr06aqCcgaEVsP3TJdr+yZtFzvwH0PvalKtOYv8iZgus/ikN9h29DH+cvyXYn3ZF7NTiP3sbdBgQL5bhaDdVe77ML5lEQtCcbbAg6TexoSL9HhGyDmp0oNdTbeuohSYCPYfOh7jEFJi9cp/YJHHmsl+haa8ZYnXAXh010KRj58HzwLR6v/A/e0XZicdrDcR7QpFcKcmnBCxypjyhtXESJmXEUZQkwVMiTH1KTkHob9qKmc6JTRiwrPV6ujVilh7LU1QkyDft0GKvrFrID4lZ+C76jCAhHhKRvTpqEIlA5J98y75DmUA/dA/tfZ5dWORMRYLtSnS5KTHFkpxi3S1nKhgWOcNoHBY5w2gcFjnDaBwWOcNoHBY5w2gcFjnDaBwWOcNoHBY5w2icIpF7Ree6+5rAzSeWYRgNQbrWexnzSOTj9YboUL0hKohhGC0RHermZZzwL7WnEeJEQg/fAAAAAElFTkSuQmCC"
      alt="GFT logo"
    />
    <div className="px-0 md:px-10 ml-12">
      <h4 className="pb-2 text-xl font-ligth bg-blue">Cloud DevOps Engineer</h4>
      <h4 className="text-l font-ligth bg-blue">
        📍 GFT Technologies - Barcelona, Spain
      </h4>
      <p className="pb-5 pt-2 dark:text-gray-300">
        <span className='underline decoration-[#F7AB0A]/50'>📅</span> Oct '23 - Present
      </p>
      <ul className="list-disc space-y-2 ml-5 text-lg dark:text-gray-300">
        <li>Utilizing Terraform as IaC to architect and deploy cloud environments
          on main providers such as GCP, AWS and Azure.
        </li>
        <li>CI/CD processes through GitHub Actions and Jenkins pipelines.</li>
        <li>Utilizing Docker and Kubernetes as main orchestration and containers
          technologies.
        </li>
        <li>Maven and Helm as core packages and deployment technologies.</li>
        <li>Other Techs Stack: GitLab · Istio · MongoDB </li>
      </ul>
    </div>
  </article>
  );
}
