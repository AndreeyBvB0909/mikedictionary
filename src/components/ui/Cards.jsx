import React from "react";
import { useState } from "react";
import Carousel from "../ui/Carousel"; // <- asegúrate de que la ruta sea correcta

const Cards = () => {
  const sections = {
    i: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057474/neat_th5uwk.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057470/peas_vxwuuu.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057469/seal_hxmzjp.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057406/beat_mtzak9.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057401/knee_v6ctu6.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057394/eel_egkigc.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057389/breeze_n7jqdo.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057385/leek_lyaicd.png",
    ],
    I: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057703/wrist_swt2ny.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057694/ill_cjshco.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057684/wig_p49gxf.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057680/hill_tvtsbq.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057671/will_kjf8mh.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057665/quilt_ayusue.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057661/issue_zoii1f.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057644/spin_fdc6in.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057641/twist_vehwic.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057641/lit_vmvzq2.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057619/guilty_qbehnk.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1756057596/syrup_jgnsvl.png",
    ],
    ae: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119596/mat_rsvk7d.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119594/flat_uidc2a.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119589/tan_oid6vo.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119573/pat_lpyq9k.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757211659/talon_zpeuni.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757211656/calf_h4wzbq.png"
    ],
    a: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119523/squash_ud43ja.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119511/otters_avtfjo.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757210953/haul_xpbt1r.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757210958/lark_lhfdml.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757210953/haul_xpbt1r.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757384716/cot_yjonyo.png"
    ],
    eI: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119772/hay_bvadbb.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119771/sleigh_lbbomv.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119757/freight_npmd4x.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119755/grain_ktqqav.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757206233/hail_vtkxnf.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757206230/veil_mgfjy5.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757206227/braid_wszlby.png"
    ],
    ɛ: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120124/wet_pkprut.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120116/measure_auwmav.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120116/bent_dznsca.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119837/several_a6nn7v.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119832/fence_yxhufj.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119832/guess_o8dyez.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119826/mess_pcpobh.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119817/den_tnab9c.png",
    ],
    ɚ: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119726/whisper_uz0lhx.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119725/slumber_w9lll2.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119713/venture_evjbiy.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119711/foster_bdql1z.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119697/anchor_ttvwre.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119687/ladder_czwfq9.png",
    ],
    ɝ: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119910/whirl_laepii.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119903/purse_k4k8ss.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119900/spurt_hinmw8.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119895/hurl_csms6v.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119894/fur_mmt1sw.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119891/blur_xxgg6t.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119861/purr_rrfnk2.png",
    ],
    ou: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120237/odor_f6qdho.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120229/foam_pg0uqm.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120227/rogue_brqbjw.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120221/loan_lyko8l.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757205034/tote_sbmapl.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757205031/stove_rx1sdu.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757205031/oath_bzhzfr.png"
    ],
    ɔ: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119660/broad_h9weet.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119658/awful_mm0mwk.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119657/awe_itvslq.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119655/naughty_xfojvd.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757119645/flaw_nwvpsy.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757384763/dawn_enbozt.png"
    ],
    u: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120296/ooze_r1dsu3.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120291/fool_u9qvac.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120289/chew_xysndq.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120287/stewed_mawmbz.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120285/clue_ziahyn.png",
    ],
    ʊ: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120074/brook_s9kosf.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120073/hood_dwjoyt.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120066/wool_hjfvyp.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120066/shook_qebnfe.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120042/bulletin_tdpynm.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757385519/soot_rm2ogc.png"
    ],
    ʌ: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757120310/upper_afanz3.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757203598/hut_bqmu2i.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757203591/bunk_sstcoy.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757203587/mug_mov6ny.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757203581/lush_wgegvf.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757203581/rust_cwgncu.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757203576/gush_uz4vpd.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757203572/pup_lotscw.png"
    ],
    aʊ: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757213916/scout_fjhot7.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757213916/doubt_ny9c8m.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757213913/pound_uaazk2.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757213908/shout_bgbipa.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757213890/vow_znbph2.png",
    ],
    aI: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757215986/vine_umdpxv.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757215982/tide_q9o6m6.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757215973/sly_s41w4b.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757215968/stride_perpey.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757215954/pine_lhefmo.png",
    ],
    ɔI: [
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757217996/soil_xcwgrn.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757217980/broil_gi8hrf.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757217972/foil_qbocjl.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757217972/foil_qbocjl.png",
      "https://res.cloudinary.com/doznpzndo/image/upload/v1757217962/joist_rtah2r.png",
    ],
  };

  const [selectedSection, setSelectedSection] = useState(
    Object.keys(sections)[0]
  );

  // Manejar cambio en el select
  const handleChange = (e) => {
    setSelectedSection(e.target.value);
  };

  return (
    <div className="space-y-6">
      {/* Select para elegir sección */}
      <div className="section-select-container">
        <select
          value={selectedSection}
          onChange={handleChange}
          className="section-select"
        >
          {Object.keys(sections).map((section) => (
            <option key={section} value={section}>
              SOUND: {section}
            </option>
          ))}
        </select>
      </div>

      {/* Carousel de la sección seleccionada */}
      <Carousel urls={sections[selectedSection]} />
    </div>
  );
};

export default Cards;
