'use strict';

module.exports = {
  // Use hidden time_to_non_blank_paint
  'dom.performance.time_to_non_blank_paint.enabled': true,
  // IPV6 sometimes makes DNS slow on Linux
  'network.dns.disableIPv6': true,
  'browser.startup.homepage': 'about:blank',
  /* Extra tracking protection https://wiki.mozilla.org/Security/Tracking_protection */
  'privacy.trackingprotection.enabled': false,
  'privacy.trackingprotection.pbmode.enabled': false,
  'privacy.trackingprotection.annotate_channels': false,
  'services.sync.prefs.sync.privacy.trackingprotection.enabled': false,
  'services.sync.prefs.sync.privacy.trackingprotection.pbmode.enabled': false,
  'browser.safebrowsing.provider.mozilla.updateURL': '',
  'browser.safebrowsing.provider.mozilla.gethashURL': '',

  /* Disable heartbeat https://wiki.mozilla.org/Firefox/Shield/Heartbeat */
  'browser.selfsupport.url': '',
  'browser.selfsupport.enabled': false,

  /* Disable detectportal.firefox.com */
  'network.captive-portal-service.enabled': false,

  /* Disable telemetry  https://wiki.mozilla.org/Telemetry/Testing */
  'toolkit.telemetry.prompted': 2,
  'toolkit.telemetry.rejected': true,
  'toolkit.telemetry.enabled': false,
  'toolkit.telemetry.reportingpolicy.firstRun': false,

  /* https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections */
  'browser.safebrowsing.downloads.remote.enabled': false,
  'browser.startup.homepage_override.mstone': 'ignore',
  'extensions.getAddons.cache.enabled': false,

  // Preferences from
  // https://searchfox.org/mozilla-central/source/testing/talos/talos/config.py
  // slightly modified - all URLs are set to blank
  'app.update.enabled': false,
  'browser.addon-watch.interval': -1,
  'browser.aboutHomeSnippets.updateUrl': '',
  'browser.bookmarks.max_backups': 0,
  'browser.cache.disk.smart_size.enabled': false,
  'browser.cache.disk.smart_size.first_run': false,
  'browser.chrome.dynamictoolbar': false,
  'browser.dom.window.dump.enabled': true,
  'browser.EULA.override': true,
  'browser.link.open_newwindow': 2,
  'browser.reader.detectedFirstArticle': true,
  'browser.shell.checkDefaultBrowser': false,
  'browser.warnOnQuit': false,
  // 'browser.tabs.remote.autostart': false,
  'dom.allow_scripts_to_close_windows': true,
  'dom.disable_open_during_load': false,
  'dom.disable_window_flip': true,
  'dom.disable_window_move_resize': true,
  'dom.max_chrome_script_run_time': 0,
  'dom.max_script_run_time': 0,
  'extensions.autoDisableScopes': 10,
  'extensions.checkCompatibility': false,
  'extensions.enabledScopes': 5,
  'extensions.update.notifyUser': false,
  'hangmonitor.timeout': 0,
  // 'network.proxy.http': 'localhost',
  // 'network.proxy.http_port': 80,
  // 'network.proxy.type': 1,
  'idle.lastDailyNotification': new Date().getTime(),
  'privacy.reduceTimerPrecision': false,
  'places.database.lastMaintenance': 7258114800,
  'security.enable_java': false,
  'security.fileuri.strict_origin_policy': false,
  'dom.send_after_paint_to_content': true,
  take_over_this_computer: true,
  'browser.newtabpage.activity-stream.default.sites': '',
  'browser.newtabpage.activity-stream.telemetry': false,
  'browser.newtabpage.activity-stream.tippyTop.service.endpoint': '',
  'browser.newtabpage.activity-stream.feeds.section.topstories': false,
  'browser.newtabpage.activity-stream.feeds.snippets': false,
  'browser.safebrowsing.downloads.remote.url': '',
  'browser.safebrowsing.provider.google.gethashURL': '',
  'browser.safebrowsing.provider.google.updateURL': '',
  'browser.safebrowsing.provider.google4.gethashURL': '',
  'browser.safebrowsing.provider.google4.updateURL': '',
  'privacy.trackingprotection.introURL': '',
  'browser.safebrowsing.phishing.enabled': false,
  'browser.safebrowsing.malware.enabled': false,
  'browser.safebrowsing.blockedURIs.enabled': false,
  'browser.safebrowsing.downloads.enabled': false,
  'browser.safebrowsing.passwords.enabled': false,
  'plugins.flashBlock.enabled': false,
  'browser.search.isUS': true,
  'browser.search.countryCode': 'US',
  'browser.search.geoip.url': '',
  'browser.urlbar.userMadeSearchSuggestionsChoice': true,
  'extensions.update.url': '',
  'extensions.update.background.url': '',
  'extensions.blocklist.enabled': false,
  'extensions.blocklist.url': '',
  'extensions.hotfix.url': '',
  'extensions.update.enabled': false,
  'extensions.webservice.discoverURL': '',
  'extensions.getAddons.get.url': '',
  'extensions.getAddons.getWithPerformance.url': '',
  'extensions.getAddons.search.browseURL': '',
  'media.gmp-manager.url': '',
  'media.gmp-manager.updateEnabled': false,
  'extensions.systemAddon.update.url': '',
  'app.normandy.api_url': '',
  'browser.ping-centre.staging.endpoint': '',
  'browser.ping-centre.production.endpoint': '',
  'media.navigator.enabled': true,
  'media.peerconnection.enabled': true,
  'media.navigator.permission.disabled': true,
  'media.capturestream_hints.enabled': true,
  'browser.contentHandlers.types.0.uri': '',
  'browser.contentHandlers.types.1.uri': '',
  'browser.contentHandlers.types.2.uri': '',
  'browser.contentHandlers.types.3.uri': '',
  'browser.contentHandlers.types.4.uri': '',
  'browser.contentHandlers.types.5.uri': '',
  'identity.fxaccounts.auth.uri': '',
  'datareporting.healthreport.documentServerURI': '',
  'datareporting.policy.dataSubmissionPolicyBypassNotification': true,
  'general.useragent.updates.enabled': false,
  'browser.webapps.checkForUpdates': 0,
  'browser.search.geoSpecificDefaults': false,
  'browser.snippets.enabled': false,
  'browser.snippets.syncPromo.enabled': false,
  'toolkit.telemetry.server': '',
  'experiments.manifest.uri': '',
  'network.http.speculative-parallel-limit': 0,
  'lightweightThemes.selectedThemeID': '',
  'devtools.chrome.enabled': false,
  'devtools.debugger.remote-enabled': false,
  'devtools.theme': 'light',
  'devtools.timeline.enabled': false,
  'identity.fxaccounts.migrateToDevEdition': false,
  'plugin.state.flash': 0,
  'media.libavcodec.allow-obsolete': true,
  'extensions.legacy.enabled': true,
  'xpinstall.signatures.required': false
};