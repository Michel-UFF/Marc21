document.addEventListener('DOMContentLoaded', function () {
    const tagInput = document.getElementById('tag');
    const ind1Input = document.getElementById('ind1');
    const ind2Input = document.getElementById('ind2');
    const subfieldsInput = document.getElementById('subfields');
    const fillButton = document.getElementById('fillButton');
    const displayInfoButton = document.getElementById('displayInfoButton');
    const infoText = document.getElementById('infoText');

    fillButton.addEventListener('click', function () {
        const tag = tagInput.value.trim();
        const ind1 = ind1Input.value.trim();
        const ind2 = ind2Input.value.trim();
        const subfields = subfieldsInput.value.trim();

        const field = `${tag} ${ind1}${ind2} ${subfields}`;

        // Adiciona o campo ao texto existente, se houver
        infoText.textContent += infoText.textContent ? `\n${field}` : `Campo adicionado:\n${field}`;

        // Limpa campos do formulário
        tagInput.value = '';
        ind1Input.value = '';
        ind2Input.value = '';
        subfieldsInput.value = '';

        // Pergunta se deseja inserir um novo campo
        const newField = confirm("Deseja inserir um novo campo?");

        if (!newField) {
            // Exibe os resultados finais
            infoText.textContent = infoText.textContent ? `\nCódigo MARC21:\n${infoText.textContent}\n` : '\nCódigo MARC21:\nNenhum campo adicionado.\n';
        }
    });

    displayInfoButton.addEventListener('click', function () {
        const tag = tagInput.value.trim();

        // Verifica se a tag está vazia
        if (tag === '') {
            alert("Por favor, preencha o campo da tag antes de clicar em 'Exibir Ajuda'.");
        } else {
            // Pergunta se o usuário precisa de ajuda
            const needHelp = confirm("Você precisa de ajuda?");

            if (needHelp) {
                // Abre o link de ajuda em uma nova guia do navegador
                openHelpLink(tag);
            }
        }
    });

    document.body.addEventListener('click', function (event) {
    // Impede a propagação do evento para evitar o fechamento do popup
    event.stopPropagation();

    // Adicione aqui o código que você deseja executar quando a página for clicada
    // Exemplo: imprime uma mensagem no console
    console.log('Clique detectado na página.');
    });

    // Utilizando o fetch para fazer a requisição HTTP
    function openHelpLink(tag) {
        if (tag in tagLinks) {
            const url = tagLinks[tag];
            window.open(url, '_blank');
        } else {
            alert("Link de ajuda não encontrado para esta tag.");
        }
    }

    // Dicionário de links de tags
    const tagLinks = {
    "Home Page": "https://www.dbd.puc-rio.br/MARC21/conteudo.html",	
    "Exemplo": "https://www.dbd.puc-rio.br/MARC21/ex_comp.html",
    "Tabela Geográfica": "https://www.dbd.puc-rio.br/MARC21/t_geo.html",
    "Tabela Países": "https://www.dbd.puc-rio.br/MARC21/t_paises.html",
    "Tabela Idiomas": "https://www.dbd.puc-rio.br/MARC21/t_idiomas.html",
    "Tabela Artigos Iniciais": "https://www.dbd.puc-rio.br/MARC21/t_artigos.html",
    "Tabela Código de Relação Com a Obra": "https://www.dbd.puc-rio.br/MARC21/t_cod.html",
    "020": "https://www.dbd.puc-rio.br/MARC21/isbn_020.html",
    "022": "https://www.dbd.puc-rio.br/MARC21/issn_022.html",
    "024": "https://www.dbd.puc-rio.br/MARC21/out_n_norm.html",
    "026": "https://www.dbd.puc-rio.br/MARC21/imp_dig.html",
    "027": "https://www.dbd.puc-rio.br/MARC21/n_rel_tec.html",
    "028": "https://www.dbd.puc-rio.br/MARC21/ed_mus.html",
    "030": "https://www.dbd.puc-rio.br/MARC21/des_coden.html",
    "031": "https://www.dbd.puc-rio.br/MARC21/inf_music.html",
    "033": "https://www.dbd.puc-rio.br/MARC21/acontecimento.html",
    "034": "https://www.dbd.puc-rio.br/MARC21/cartografico.html",
    "035": "https://www.dbd.puc-rio.br/MARC21/cont_sistema.html",
    "037": "https://www.dbd.puc-rio.br/MARC21/font_aquisicao.html",
    "038": "https://www.dbd.puc-rio.br/MARC21/lic_registro.html",
    "040": "https://www.dbd.puc-rio.br/MARC21/font_cat.html",
    "041": "https://www.dbd.puc-rio.br/MARC21/cod_idioma.html",
    "042": "https://www.dbd.puc-rio.br/MARC21/cod_aut.html",
    "043": "https://www.dbd.puc-rio.br/MARC21/cod_geog.html",
    "044": "https://www.dbd.puc-rio.br/MARC21/cod_pais.html",
    "045": "https://www.dbd.puc-rio.br/MARC21/cod_periodo.html",
    "046": "https://www.dbd.puc-rio.br/MARC21/cod_datas.html",
    "047": "https://www.dbd.puc-rio.br/MARC21/cod_forma.html",
    "048": "https://www.dbd.puc-rio.br/MARC21/cod_numero.html",
    "080": "https://www.dbd.puc-rio.br/MARC21/n_classif.html",
    "082": "https://www.dbd.puc-rio.br/MARC21/n_dewey.html",
    "083": "https://www.dbd.puc-rio.br/MARC21/n_dewey_ad.html",
    "084": "https://www.dbd.puc-rio.br/MARC21/out_class.html",
    "088": "https://www.dbd.puc-rio.br/MARC21/num_rel.html",
    "090": "https://www.dbd.puc-rio.br/MARC21/cham_local.html",
    "091": "https://www.dbd.puc-rio.br/MARC21/cham_local.html",
    "092": "https://www.dbd.puc-rio.br/MARC21/cham_local.html",
    "093": "https://www.dbd.puc-rio.br/MARC21/cham_local.html",
    "094": "https://www.dbd.puc-rio.br/MARC21/cham_local.html",
    "095": "https://www.dbd.puc-rio.br/MARC21/cham_local.html",
    "096": "https://www.dbd.puc-rio.br/MARC21/cham_local.html",
    "097": "https://www.dbd.puc-rio.br/MARC21/cham_local.html",
    "098": "https://www.dbd.puc-rio.br/MARC21/cham_local.html",
    "099": "https://www.dbd.puc-rio.br/MARC21/cham_local.html",
    "100": "https://www.dbd.puc-rio.br/MARC21/en_nome.html",
    "110": "https://www.dbd.puc-rio.br/MARC21/en_entidade.html",
    "111": "https://www.dbd.puc-rio.br/MARC21/en_evento.html",
    "130": "https://www.dbd.puc-rio.br/MARC21/en_titulo.html",
    "210": "https://www.dbd.puc-rio.br/MARC21/ti_abreviado.html",
    "222": "https://www.dbd.puc-rio.br/MARC21/ti_chave.html",
    "240": "https://www.dbd.puc-rio.br/MARC21/ti_uniforme.html",
    "242": "https://www.dbd.puc-rio.br/MARC21/ti_traduzido.html",
    "243": "https://www.dbd.puc-rio.br/MARC21/ti_coletivo.html",
    "245": "https://www.dbd.puc-rio.br/MARC21/ti_principal.html",
    "246": "https://www.dbd.puc-rio.br/MARC21/ti_formas.html",
    "247": "https://www.dbd.puc-rio.br/MARC21/ti_anterior.html",
    "250": "https://www.dbd.puc-rio.br/MARC21/edicao.html",
    "254": "https://www.dbd.puc-rio.br/MARC21/area_musica.html",
    "255": "https://www.dbd.puc-rio.br/MARC21/dado_mat.html",
    "256": "https://www.dbd.puc-rio.br/MARC21/car_arquivo.html",
    "257": "https://www.dbd.puc-rio.br/MARC21/pais_entidade.html",
    "258": "https://www.dbd.puc-rio.br/MARC21/inf_mat.html",
    "260": "https://www.dbd.puc-rio.br/MARC21/area_pub.html",
    "263": "https://www.dbd.puc-rio.br/MARC21/data_pub.html",
    "264": "https://www.dbd.puc-rio.br/MARC21/prod_pub.html",
    "270": "https://www.dbd.puc-rio.br/MARC21/endereco.html",
    "300": "https://www.dbd.puc-rio.br/MARC21/desc_fisica.html",
    "306": "https://www.dbd.puc-rio.br/MARC21/tempo_dur.html",
    "307": "https://www.dbd.puc-rio.br/MARC21/horario.html",
    "310": "https://www.dbd.puc-rio.br/MARC21/ult_perio.html",
    "321": "https://www.dbd.puc-rio.br/MARC21/perio_ant.html",
    "336": "https://www.dbd.puc-rio.br/MARC21/tip_cont.html",
    "337": "https://www.dbd.puc-rio.br/MARC21/tip_mid.html",
    "338": "https://www.dbd.puc-rio.br/MARC21/tip_sup.html",
    "340": "https://www.dbd.puc-rio.br/MARC21/sup_fis.html",
    "342": "https://www.dbd.puc-rio.br/MARC21/dados_ref.html",
    "343": "https://www.dbd.puc-rio.br/MARC21/dados_coord.html",
    "344": "https://www.dbd.puc-rio.br/MARC21/car_son.html",
    "345": "https://www.dbd.puc-rio.br/MARC21/car_proj.html",
    "346": "https://www.dbd.puc-rio.br/MARC21/car_video.html",
    "347": "https://www.dbd.puc-rio.br/MARC21/car_arqdig.html",
    "348": "https://www.dbd.puc-rio.br/MARC21/fornotam.html",
    "351": "https://www.dbd.puc-rio.br/MARC21/org_ord.html",
    "352": "https://www.dbd.puc-rio.br/MARC21/rep_graf.html",
    "355": "https://www.dbd.puc-rio.br/MARC21/cont_seg.html",
    "357": "https://www.dbd.puc-rio.br/MARC21/cont_diss.html",
    "362": "https://www.dbd.puc-rio.br/MARC21/datas_pub.html",
    "365": "https://www.dbd.puc-rio.br/MARC21/preco.html",
    "366": "https://www.dbd.puc-rio.br/MARC21/inf_venda.html",
    "370": "https://www.dbd.puc-rio.br/MARC21/lug_ass.html",
    "377": "https://www.dbd.puc-rio.br/MARC21/idi_lin.html",
    "380": "https://www.dbd.puc-rio.br/MARC21/forma_obra.html",
    "381": "https://www.dbd.puc-rio.br/MARC21/outras_obras.html",
    "382": "https://www.dbd.puc-rio.br/MARC21/meio_exec.html",
    "383": "https://www.dbd.puc-rio.br/MARC21/num_mus.html",
    "384": "https://www.dbd.puc-rio.br/MARC21/tonalidade.html",
    "385": "https://www.dbd.puc-rio.br/MARC21/car_pub.html",
    "386": "https://www.dbd.puc-rio.br/MARC21/car_aut.html",
    "388": "https://www.dbd.puc-rio.br/MARC21/per_tempo.html",
    "490": "https://www.dbd.puc-rio.br/MARC21/tit_rel.html",
    "500": "https://www.dbd.puc-rio.br/MARC21/nota_geral.html",
    "501": "https://www.dbd.puc-rio.br/MARC21/nota_ini.html",
    "502": "https://www.dbd.puc-rio.br/MARC21/nota_diss.html",
    "504": "https://www.dbd.puc-rio.br/MARC21/nota_bibl.html",
    "505": "https://www.dbd.puc-rio.br/MARC21/nota_cont.html",
    "506": "https://www.dbd.puc-rio.br/MARC21/nota_rest.html",
    "507": "https://www.dbd.puc-rio.br/MARC21/nota_esc.html",
    "508": "https://www.dbd.puc-rio.br/MARC21/nota_cred.html",
    "510": "https://www.dbd.puc-rio.br/MARC21/nota_cit.html",
    "511": "https://www.dbd.puc-rio.br/MARC21/nota_part.html",
    "513": "https://www.dbd.puc-rio.br/MARC21/nota_rel.html",
    "514": "https://www.dbd.puc-rio.br/MARC21/nota_qual.html",
    "515": "https://www.dbd.puc-rio.br/MARC21/nota_pec.html",
    "516": "https://www.dbd.puc-rio.br/MARC21/nota_arq.html",
    "518": "https://www.dbd.puc-rio.br/MARC21/nota_data.html",
    "520": "https://www.dbd.puc-rio.br/MARC21/nota_res.html",
    "521": "https://www.dbd.puc-rio.br/MARC21/nota_pub.html",
    "522": "https://www.dbd.puc-rio.br/MARC21/nota_cob.html",
    "524": "https://www.dbd.puc-rio.br/MARC21/nota_cita.html",
    "525": "https://www.dbd.puc-rio.br/MARC21/nota_suple.html",
    "526": "https://www.dbd.puc-rio.br/MARC21/nota_prog.html",
    "530": "https://www.dbd.puc-rio.br/MARC21/nota_form.html",
    "533": "https://www.dbd.puc-rio.br/MARC21/nota_reprod.html",
    "534": "https://www.dbd.puc-rio.br/MARC21/nota_versao.html",
    "535": "https://www.dbd.puc-rio.br/MARC21/nota_loc.html",
    "536": "https://www.dbd.puc-rio.br/MARC21/nota_fin.html",
    "538": "https://www.dbd.puc-rio.br/MARC21/nota_det.html",
    "540": "https://www.dbd.puc-rio.br/MARC21/nota_termos.html",
    "541": "https://www.dbd.puc-rio.br/MARC21/nota_fonte.html",
    "544": "https://www.dbd.puc-rio.br/MARC21/nota_mate.html",
    "545": "https://www.dbd.puc-rio.br/MARC21/nota_bibli.html",
    "546": "https://www.dbd.puc-rio.br/MARC21/nota_idioma.html",
    "547": "https://www.dbd.puc-rio.br/MARC21/nota_tit.html",
    "550": "https://www.dbd.puc-rio.br/MARC21/nota_publ.html",
    "552": "https://www.dbd.puc-rio.br/MARC21/nota_atrib.html",
    "555": "https://www.dbd.puc-rio.br/MARC21/nota_ind.html",
    "556": "https://www.dbd.puc-rio.br/MARC21/nota_doc.html",
    "561": "https://www.dbd.puc-rio.br/MARC21/nota_or.html",
    "562": "https://www.dbd.puc-rio.br/MARC21/nota_ident.html",
    "563": "https://www.dbd.puc-rio.br/MARC21/inf_enc.html",
    "565": "https://www.dbd.puc-rio.br/MARC21/nota_caract.html",
    "567": "https://www.dbd.puc-rio.br/MARC21/nota_met.html",
    "580": "https://www.dbd.puc-rio.br/MARC21/nota_lig.html",
    "581": "https://www.dbd.puc-rio.br/MARC21/nota_desc.html",
    "583": "https://www.dbd.puc-rio.br/MARC21/nota_process.html",
    "584": "https://www.dbd.puc-rio.br/MARC21/nota_soma.html",
    "585": "https://www.dbd.puc-rio.br/MARC21/nota_exp.html",
    "586": "https://www.dbd.puc-rio.br/MARC21/nota_prem.html",
    "590": "https://www.dbd.puc-rio.br/MARC21/notas_locais.html",
    "591": "https://www.dbd.puc-rio.br/MARC21/notas_locais.html",
    "592": "https://www.dbd.puc-rio.br/MARC21/notas_locais.html",
    "593": "https://www.dbd.puc-rio.br/MARC21/notas_locais.html",
    "594": "https://www.dbd.puc-rio.br/MARC21/notas_locais.html",
    "595": "https://www.dbd.puc-rio.br/MARC21/notas_locais.html",
    "596": "https://www.dbd.puc-rio.br/MARC21/notas_locais.html",
    "597": "https://www.dbd.puc-rio.br/MARC21/notas_locais.html",
    "598": "https://www.dbd.puc-rio.br/MARC21/notas_locais.html",
    "599": "https://www.dbd.puc-rio.br/MARC21/notas_locais.html",
    "600": "https://www.dbd.puc-rio.br/MARC21/ass_nome.html",
    "610": "https://www.dbd.puc-rio.br/MARC21/ass_ent.html",
    "611": "https://www.dbd.puc-rio.br/MARC21/ass_ev.html",
    "630": "https://www.dbd.puc-rio.br/MARC21/ass_unif.html",
    "648": "https://www.dbd.puc-rio.br/MARC21/ass_ter.html",
    "650": "https://www.dbd.puc-rio.br/MARC21/ass_top.html",
    "651": "https://www.dbd.puc-rio.br/MARC21/ass_geo.html",
    "697": "https://www.dbd.puc-rio.br/MARC21/termo.html",
    "700": "https://www.dbd.puc-rio.br/MARC21/ent_nome.html",
    "710": "https://www.dbd.puc-rio.br/MARC21/ent_enti.html",
    "711": "https://www.dbd.puc-rio.br/MARC21/ent_evento.html",
    "720": "https://www.dbd.puc-rio.br/MARC21/ent_cont.html",
    "730": "https://www.dbd.puc-rio.br/MARC21/ent_unif.html",
    "740": "https://www.dbd.puc-rio.br/MARC21/ent_rel.html",
    "752": "https://www.dbd.puc-rio.br/MARC21/ent_forma.html",
    "753": "https://www.dbd.puc-rio.br/MARC21/det_arq.html",
    "754": "https://www.dbd.puc-rio.br/MARC21/ent_ident.html",
    "760": "https://www.dbd.puc-rio.br/MARC21/ent_serie.html",
    "762": "https://www.dbd.puc-rio.br/MARC21/ent_sub.html",
    "765": "https://www.dbd.puc-rio.br/MARC21/ent_idio.html",
    "767": "https://www.dbd.puc-rio.br/MARC21/ent_tradu.html",
    "770": "https://www.dbd.puc-rio.br/MARC21/ent_suple.html",
    "772": "https://www.dbd.puc-rio.br/MARC21/ent_regip.html",
    "773": "https://www.dbd.puc-rio.br/MARC21/ent_anali.html",
    "774": "https://www.dbd.puc-rio.br/MARC21/ent_unicom.html",
    "775": "https://www.dbd.puc-rio.br/MARC21/ent_outedi.html",
    "776": "https://www.dbd.puc-rio.br/MARC21/ent_form.html",
    "777": "https://www.dbd.puc-rio.br/MARC21/ent_pubc.html",
    "780": "https://www.dbd.puc-rio.br/MARC21/ent_tita.html",
    "785": "https://www.dbd.puc-rio.br/MARC21/ent_titp.html",
    "786": "https://www.dbd.puc-rio.br/MARC21/ent_font.html",
    "787": "https://www.dbd.puc-rio.br/MARC21/ent_reln.html",
    "800": "https://www.dbd.puc-rio.br/MARC21/ent_senop.html",
    "810": "https://www.dbd.puc-rio.br/MARC21/ent_sen.html",
    "811": "https://www.dbd.puc-rio.br/MARC21/ent_sev.html",
    "830": "https://www.dbd.puc-rio.br/MARC21/ent_tui.html",
    "841": "https://www.dbd.puc-rio.br/MARC21/dad_hol.html",
    "842": "https://www.dbd.puc-rio.br/MARC21/des_fis.html",
    "843": "https://www.dbd.puc-rio.br/MARC21/nore.html",
    "844": "https://www.dbd.puc-rio.br/MARC21/noun.html",
    "845": "https://www.dbd.puc-rio.br/MARC21/no_reg.html",
    "850": "https://www.dbd.puc-rio.br/MARC21/col_in.html",
    "852": "https://www.dbd.puc-rio.br/MARC21/local.html",
    "853": "https://www.dbd.puc-rio.br/MARC21/leg_bi.html",
    "854": "https://www.dbd.puc-rio.br/MARC21/leg_ma.html",
    "855": "https://www.dbd.puc-rio.br/MARC21/leg_ind.html",
    "856": "https://www.dbd.puc-rio.br/MARC21/loc_as.html",
    "863": "https://www.dbd.puc-rio.br/MARC21/num_cr.html",
    "864": "https://www.dbd.puc-rio.br/MARC21/num_ma.html",
    "865": "https://www.dbd.puc-rio.br/MARC21/num_in.html",
    "866": "https://www.dbd.puc-rio.br/MARC21/inv_un.html",
    "867": "https://www.dbd.puc-rio.br/MARC21/inv_ma.html",
    "868": "https://www.dbd.puc-rio.br/MARC21/inv_in.html",
    "876": "https://www.dbd.puc-rio.br/MARC21/inf_un.html",
    "877": "https://www.dbd.puc-rio.br/MARC21/inf_ma.html",
    "878": "https://www.dbd.puc-rio.br/MARC21/inf_in.html",
    "880": "https://www.dbd.puc-rio.br/MARC21/rep_gr.html",
    "883": "https://www.dbd.puc-rio.br/MARC21/prov_met_ger.html",
    "884": "https://www.dbd.puc-rio.br/MARC21/inf_con.html",
    "886": "https://www.dbd.puc-rio.br/MARC21/inf_ca.html",
    "887": "https://www.dbd.puc-rio.br/MARC21/inf_nca.html",
    };
});