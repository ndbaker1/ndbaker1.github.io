use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug)]
pub struct Portfolio {
    #[serde(rename = "education")]
    pub education: Vec<Education>,

    #[serde(rename = "skills")]
    pub skills: Skills,

    #[serde(rename = "work")]
    pub work: Vec<Work>,

    #[serde(rename = "competitions")]
    pub competitions: Vec<Competition>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Competition {
    #[serde(rename = "event")]
    pub event: String,

    #[serde(rename = "date")]
    pub date: String,

    #[serde(rename = "location")]
    pub location: String,

    #[serde(rename = "items")]
    pub items: Vec<String>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Education {
    #[serde(rename = "title")]
    pub title: String,

    #[serde(rename = "school")]
    pub school: String,

    #[serde(rename = "date")]
    pub date: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Skills {
    #[serde(rename = "tools")]
    pub tools: Vec<String>,

    #[serde(rename = "languages")]
    pub languages: Vec<String>,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Work {
    #[serde(rename = "company")]
    pub company: String,

    #[serde(rename = "position")]
    pub position: String,

    #[serde(rename = "location")]
    pub location: String,

    #[serde(rename = "date")]
    pub date: String,

    #[serde(rename = "items")]
    pub items: Vec<String>,
}
