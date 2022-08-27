use std::{fs::read_to_string, ops::Deref};

use anyhow::Result;
use once_cell::sync::Lazy;
use regex::Regex;
use types::Portfolio;

mod types;

const YAML: Lazy<Portfolio> = Lazy::new(|| {
    let yaml_data = read_to_string("../../assets/portfolio.yaml").unwrap();
    let yaml: Portfolio = serde_yaml::from_str(&yaml_data).unwrap();
    yaml
});

fn main() -> Result<()> {
    let replacement_pattern = Regex::new(r"%\((.*)\)%")?;
    let css_content = read_to_string("../../resume/resume.css")?;
    let base_content = read_to_string("../../resume/resume.html")?;
    let yaml_data = read_to_string("../../assets/portfolio.yaml")?;

    let groups: Vec<_> = replacement_pattern
        .captures_iter(&base_content)
        .into_iter()
        .filter_map(|m| Some((m.get(0).unwrap().as_str(), m.get(1).unwrap().as_str())))
        .collect();

    for (matcher, inner) in &groups {
        Portfolio::replace(matcher, inner);
    }

    Ok(())
}

impl Portfolio {
    fn replace(matcher: &str, key: &str) {
        match key {
            "section:skills" => {
                println!("{:?}", YAML.skills.tools.join(", "));
                println!("{:?}", YAML.skills.languages.join(", "));
            }
            _ => {}
        }
    }
}
