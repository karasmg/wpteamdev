jQuery(document).ready(function(e){function t(){e.ajax({url:ajaxurl,method:"POST",data:{action:"cf7_style_remove_box"},success:function(e){}})}e(".remove_template_notice").on("click",function(c){c.preventDefault(),e(".template-message-box").fadeOut("slow"),t()}),e(document).on("click",".cf7style-pointer a.close",function(t){t.preventDefault(),e("#cf7_style_allow_tracking").is(":checked")?e.post(ajaxurl,"action=cf7_style_allow_tracking&cf7_style_allow_tracking=1",function(e){}):e.post(ajaxurl,"action=cf7_style_show_tracking&cf7_style_allow_tracking=0",function(e){})}),e('input[name="custom_template_check"]').on("change",function(){e(this).is(":checked")?e(".double-check").show():e(".double-check").hide()}),e(".confirm-remove-template").on("click",function(c){c.preventDefault();var n=e(this).parent();"no"==e('input[name="double_check_template"]:checked').val()?(n.hide(),e('input[name="custom_template_check"]').attr("checked","checked")):(t(),e.ajax({url:ajaxurl,method:"POST",data:{action:"cf7_style_remove_templates"},success:function(t){t&&(e('<p class="succeded">Predefined templates successfully removed.</p>').appendTo(n),setTimeout(function(){n.fadeOut("slow"),n.parent().fadeOut("slow",function(){setTimeout(function(){window.location.reload(!1)},300)})},2e3))}}))})});