//! Main entry point for the desktop application, using Tauri to serve the window
//! webviews.

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

/// The main entry point for the desktop application. This function is invoked
/// when the application starts.
fn main() {
    #[cfg(debug_assertions)]
    let _ = dotenvy::dotenv().map_err(|err| println!("running without `.env` file: {err}"));

    app_lib::run();
}
