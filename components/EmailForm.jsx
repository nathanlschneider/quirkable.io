"use client";
import ui from "@styles/ui.module.scss";

const EmailForm = () => {
  return (
    <form
      method="post"
      className="af-form-wrapper"
      acceptCharset="UTF-8"
      action="https://www.aweber.com/scripts/addlead.pl"
    >
      <div style={{ display: "none" }}>
        <input type="hidden" name="meta_web_form_id" value="24915601" />
        <input type="hidden" name="meta_split_id" value="" />
        <input type="hidden" name="listname" value="awlist6587493" />
        <input
          type="hidden"
          name="redirect"
          value="https://www.aweber.com/thankyou-coi.htm?m=text"
          id="redirect_02c6b02cc46e54ab32dcf0f253e47a06"
        />

        <input type="hidden" name="meta_adtracking" value="My_Web_Form" />
        <input type="hidden" name="meta_message" value="1" />
        <input type="hidden" name="meta_required" value="email" />

        <input type="hidden" name="meta_tooltip" value="email||Email" />
      </div>
      <div id="af-form-24915601" className="af-form">
        <div id="af-body-24915601" className="af-body af-standards" style={{display: "flex"}}>
          <div className="af-element">
            <label className="previewLabel" htmlFor="awf_field-116042191"></label>
            <div className="af-textWrap">
              <input
                className={ui.input}
                id="awf_field-116042191"
                type="text"
                name="email"
                tabIndex="500"
                
                placeholder="Email"
                // defaultValue="Email"
              />
            </div>
            <div className="af-clear"></div>
          </div>
          <div className="af-element buttonContainer">
            <input style={{cursor: "pointer"}} name="submit" className="submit" type="submit" value="Submit" tabIndex="501" />
            <div className="af-clear"></div>
          </div>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <img src="https://forms.aweber.com/form/displays.htm?id=TCycjKxsDIw=" alt="" />
      </div>
    </form>
  );
};

export default EmailForm;
