sidebarNodes={"extras":[{"group":"","headers":[{"anchor":"modules","id":"Modules"},{"anchor":"mix-tasks","id":"Mix Tasks"}],"id":"api-reference","title":"API Reference"},{"group":"","headers":[{"anchor":"license","id":"License"},{"anchor":"basic-usage","id":"Basic usage"},{"anchor":"intro","id":"Intro"},{"anchor":"thanks","id":"Thanks"}],"id":"readme","title":"Race Bot"},{"group":"","headers":[],"id":"license","title":"LICENSE"}],"modules":[{"group":"","id":"F1Bot","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"api_base/0","id":"api_base/0"},{"anchor":"driver_info_by_abbr/1","id":"driver_info_by_abbr/1"},{"anchor":"driver_info_by_number/1","id":"driver_info_by_number/1"},{"anchor":"driver_session_data/1","id":"driver_session_data/1"},{"anchor":"fetch_env/1","id":"fetch_env/1"},{"anchor":"get_env/2","id":"get_env/2"},{"anchor":"is_race?/0","id":"is_race?/0"},{"anchor":"lap_number/0","id":"lap_number/0"},{"anchor":"reload_live_data/2","id":"reload_live_data/2"},{"anchor":"session_info/0","id":"session_info/0"},{"anchor":"session_status/0","id":"session_status/0"}]}],"sections":[],"title":"F1Bot"},{"group":"","id":"F1Bot.PubSub","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"broadcast/2","id":"broadcast/2"},{"anchor":"subscribe/2","id":"subscribe/2"}]}],"sections":[],"title":"F1Bot.PubSub"},{"group":"","id":"F1Bot.Replay","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"session_from_url/2","id":"session_from_url/2"}]}],"sections":[],"title":"F1Bot.Replay"},{"group":"Live Timing API","id":"F1Bot.ExternalApi.SignalR.Client","nested_context":"F1Bot.ExternalApi.SignalR","nested_title":".Client","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"F1Bot.ExternalApi.SignalR.Client"},{"group":"Live Timing API","id":"F1Bot.ExternalApi.SignalR.Encoding","nested_context":"F1Bot.ExternalApi.SignalR","nested_title":".Encoding","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"decode_live_timing_data/1","id":"decode_live_timing_data/1"},{"anchor":"safe_zlib_unzip/1","id":"safe_zlib_unzip/1"}]}],"sections":[],"title":"F1Bot.ExternalApi.SignalR.Encoding"},{"group":"Live Timing API","id":"F1Bot.ExternalApi.SignalR.Negotiation","nested_context":"F1Bot.ExternalApi.SignalR","nested_title":".Negotiation","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"negotiate/1","id":"negotiate/1"}]}],"sections":[],"title":"F1Bot.ExternalApi.SignalR.Negotiation"},{"group":"F1 Session (boundary)","id":"F1Bot.F1Session.Server","nested_context":"F1Bot.F1Session","nested_title":".Server","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"driver_info_by_abbr/1","id":"driver_info_by_abbr/1"},{"anchor":"driver_info_by_number/1","id":"driver_info_by_number/1"},{"anchor":"driver_session_data/1","id":"driver_session_data/1"},{"anchor":"push_live_timing_packet/1","id":"push_live_timing_packet/1"},{"anchor":"replace_session/1","id":"replace_session/1"},{"anchor":"server_via/0","id":"server_via/0"},{"anchor":"session_info/0","id":"session_info/0"},{"anchor":"session_status/0","id":"session_status/0"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"F1Bot.F1Session.Server"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"driver_info_by_abbr/2","id":"driver_info_by_abbr/2"},{"anchor":"driver_info_by_number/2","id":"driver_info_by_number/2"},{"anchor":"driver_session_data/2","id":"driver_session_data/2"},{"anchor":"light_copy/1","id":"light_copy/1"},{"anchor":"new/0","id":"new/0"},{"anchor":"push_driver_list_update/2","id":"push_driver_list_update/2"},{"anchor":"push_lap_number/4","id":"push_lap_number/4"},{"anchor":"push_lap_time/4","id":"push_lap_time/4"},{"anchor":"push_position/3","id":"push_position/3"},{"anchor":"push_race_control_messages/2","id":"push_race_control_messages/2"},{"anchor":"push_sector_time/5","id":"push_sector_time/5"},{"anchor":"push_session_info/2","id":"push_session_info/2"},{"anchor":"push_session_status/2","id":"push_session_status/2"},{"anchor":"push_stint_data/3","id":"push_stint_data/3"},{"anchor":"push_telemetry/3","id":"push_telemetry/3"}]}],"sections":[],"title":"F1Bot.F1Session"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.Common.Event","nested_context":"F1Bot.F1Session","nested_title":".Common.Event","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:event_scope/0","id":"event_scope/0"},{"anchor":"t:event_type/0","id":"event_type/0"},{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"new/3","id":"new/3"}]}],"sections":[],"title":"F1Bot.F1Session.Common.Event"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.Common.Helpers","nested_context":"F1Bot.F1Session","nested_title":".Common.Helpers","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"publish_events/1","id":"publish_events/1"},{"anchor":"subscribe_to_event/2","id":"subscribe_to_event/2"}]}],"sections":[],"title":"F1Bot.F1Session.Common.Helpers"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.Common.TimeSeriesStore","nested_context":"F1Bot.F1Session","nested_title":".Common.TimeSeriesStore","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"find_min_sample_around_ts/4","id":"find_min_sample_around_ts/4"},{"anchor":"find_samples_between/3","id":"find_samples_between/3"},{"anchor":"new/0","id":"new/0"},{"anchor":"push_data/2","id":"push_data/2"}]}],"sections":[],"title":"F1Bot.F1Session.Common.TimeSeriesStore"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.DriverCache","nested_context":"F1Bot.F1Session","nested_title":".DriverCache","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"get_driver_by_abbr/2","id":"get_driver_by_abbr/2"},{"anchor":"get_driver_by_number/2","id":"get_driver_by_number/2"},{"anchor":"new/0","id":"new/0"},{"anchor":"process_update/2","id":"process_update/2"},{"anchor":"put_driver/2","id":"put_driver/2"}]}],"sections":[],"title":"F1Bot.F1Session.DriverCache"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.DriverCache.DriverInfo","nested_context":"F1Bot.F1Session","nested_title":".DriverCache.DriverInfo","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"merge/2","id":"merge/2"},{"anchor":"parse_from_json/1","id":"parse_from_json/1"},{"anchor":"team_color_int/1","id":"team_color_int/1"}]}],"sections":[],"title":"F1Bot.F1Session.DriverCache.DriverInfo"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.DriverDataRepo","nested_context":"F1Bot.F1Session","nested_title":".DriverDataRepo","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"info/2","id":"info/2"},{"anchor":"light_copy/1","id":"light_copy/1"},{"anchor":"new/0","id":"new/0"},{"anchor":"push_lap_number/4","id":"push_lap_number/4"},{"anchor":"push_lap_time/4","id":"push_lap_time/4"},{"anchor":"push_position/3","id":"push_position/3"},{"anchor":"push_sector_time/5","id":"push_sector_time/5"},{"anchor":"push_stint_data/3","id":"push_stint_data/3"},{"anchor":"push_telemetry/3","id":"push_telemetry/3"}]}],"sections":[],"title":"F1Bot.F1Session.DriverDataRepo"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.DriverDataRepo.BestStats","nested_context":"F1Bot.F1Session","nested_title":".DriverDataRepo.BestStats","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:fastest_sectors/0","id":"fastest_sectors/0"},{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"new/0","id":"new/0"},{"anchor":"push_lap_time/2","id":"push_lap_time/2"},{"anchor":"push_sector_time/3","id":"push_sector_time/3"},{"anchor":"push_top_speed/2","id":"push_top_speed/2"}]}],"sections":[],"title":"F1Bot.F1Session.DriverDataRepo.BestStats"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.DriverDataRepo.DriverData","nested_context":"F1Bot.F1Session","nested_title":".DriverDataRepo.DriverData","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"light_copy/1","id":"light_copy/1"},{"anchor":"new/1","id":"new/1"},{"anchor":"push_lap_number/3","id":"push_lap_number/3"},{"anchor":"push_lap_time/3","id":"push_lap_time/3"},{"anchor":"push_position/2","id":"push_position/2"},{"anchor":"push_sector_time/4","id":"push_sector_time/4"},{"anchor":"push_stint_data/2","id":"push_stint_data/2"},{"anchor":"push_telemetry/2","id":"push_telemetry/2"}]}],"sections":[],"title":"F1Bot.F1Session.DriverDataRepo.DriverData"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.DriverDataRepo.DriverData.Summary","nested_context":"F1Bot.F1Session","nested_title":".DriverDataRepo.DriverData.Summary","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"generate/1","id":"generate/1"}]}],"sections":[],"title":"F1Bot.F1Session.DriverDataRepo.DriverData.Summary"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.DriverDataRepo.Events","nested_context":"F1Bot.F1Session","nested_title":".DriverDataRepo.Events","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"make_agg_fastest_lap_event/4","id":"make_agg_fastest_lap_event/4"},{"anchor":"make_agg_fastest_sector_event/5","id":"make_agg_fastest_sector_event/5"},{"anchor":"make_agg_top_speed_event/4","id":"make_agg_top_speed_event/4"},{"anchor":"make_tyre_change_events/2","id":"make_tyre_change_events/2"}]}],"sections":[],"title":"F1Bot.F1Session.DriverDataRepo.Events"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.DriverDataRepo.Lap","nested_context":"F1Bot.F1Session","nested_title":".DriverDataRepo.Lap","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:sector_data/0","id":"sector_data/0"},{"anchor":"t:sector_map/0","id":"sector_map/0"},{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"new_clean_sector_map/0","id":"new_clean_sector_map/0"}]}],"sections":[],"title":"F1Bot.F1Session.DriverDataRepo.Lap"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.DriverDataRepo.Laps","nested_context":"F1Bot.F1Session","nested_title":".DriverDataRepo.Laps","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"create_lap_from_args/1","id":"create_lap_from_args/1"},{"anchor":"fill_by_close_timestamp/4","id":"fill_by_close_timestamp/4"},{"anchor":"fill_sector_times/5","id":"fill_sector_times/5"},{"anchor":"find_by_close_timestamp/3","id":"find_by_close_timestamp/3"},{"anchor":"new/0","id":"new/0"}]}],"sections":[],"title":"F1Bot.F1Session.DriverDataRepo.Laps"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.DriverDataRepo.Stint","nested_context":"F1Bot.F1Session","nested_title":".DriverDataRepo.Stint","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"count_laps/1","id":"count_laps/1"},{"anchor":"new/1","id":"new/1"},{"anchor":"update/2","id":"update/2"}]}],"sections":[],"title":"F1Bot.F1Session.DriverDataRepo.Stint"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.DriverDataRepo.Stints","nested_context":"F1Bot.F1Session","nested_title":".DriverDataRepo.Stints","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"current_stint_number?/2","id":"current_stint_number?/2"},{"anchor":"find_stint/2","id":"find_stint/2"},{"anchor":"fix_lap_numbers/1","id":"fix_lap_numbers/1"},{"anchor":"last_stint/1","id":"last_stint/1"},{"anchor":"new/0","id":"new/0"},{"anchor":"push_stint_data/3","id":"push_stint_data/3"},{"anchor":"sort_by_number/2","id":"sort_by_number/2"}]}],"sections":[],"title":"F1Bot.F1Session.DriverDataRepo.Stints"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.LiveTimingHandlers","nested_context":"F1Bot.F1Session","nested_title":".LiveTimingHandlers","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:process_packet/2","id":"process_packet/2"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"process_live_timing_packet/2","id":"process_live_timing_packet/2"}]}],"sections":[],"title":"F1Bot.F1Session.LiveTimingHandlers"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.LiveTimingHandlers.CarTelemetry","nested_context":"F1Bot.F1Session","nested_title":".LiveTimingHandlers.CarTelemetry","sections":[],"title":"F1Bot.F1Session.LiveTimingHandlers.CarTelemetry"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.LiveTimingHandlers.DriverList","nested_context":"F1Bot.F1Session","nested_title":".LiveTimingHandlers.DriverList","sections":[],"title":"F1Bot.F1Session.LiveTimingHandlers.DriverList"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.LiveTimingHandlers.LapData","nested_context":"F1Bot.F1Session","nested_title":".LiveTimingHandlers.LapData","sections":[],"title":"F1Bot.F1Session.LiveTimingHandlers.LapData"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.LiveTimingHandlers.Packet","nested_context":"F1Bot.F1Session","nested_title":".LiveTimingHandlers.Packet","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]}],"sections":[],"title":"F1Bot.F1Session.LiveTimingHandlers.Packet"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.LiveTimingHandlers.PositionData","nested_context":"F1Bot.F1Session","nested_title":".LiveTimingHandlers.PositionData","sections":[],"title":"F1Bot.F1Session.LiveTimingHandlers.PositionData"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.LiveTimingHandlers.RaceControlMessages","nested_context":"F1Bot.F1Session","nested_title":".LiveTimingHandlers.RaceControlMessages","sections":[],"title":"F1Bot.F1Session.LiveTimingHandlers.RaceControlMessages"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.LiveTimingHandlers.SessionInfo","nested_context":"F1Bot.F1Session","nested_title":".LiveTimingHandlers.SessionInfo","sections":[],"title":"F1Bot.F1Session.LiveTimingHandlers.SessionInfo"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.LiveTimingHandlers.SessionStatus","nested_context":"F1Bot.F1Session","nested_title":".LiveTimingHandlers.SessionStatus","sections":[],"title":"F1Bot.F1Session.LiveTimingHandlers.SessionStatus"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.LiveTimingHandlers.StintData","nested_context":"F1Bot.F1Session","nested_title":".LiveTimingHandlers.StintData","sections":[],"title":"F1Bot.F1Session.LiveTimingHandlers.StintData"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.RaceControl","nested_context":"F1Bot.F1Session","nested_title":".RaceControl","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"new/0","id":"new/0"},{"anchor":"push_messages/2","id":"push_messages/2"}]}],"sections":[],"title":"F1Bot.F1Session.RaceControl"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.RaceControl.Message","nested_context":"F1Bot.F1Session","nested_title":".RaceControl.Message","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"new/0","id":"new/0"}]}],"sections":[],"title":"F1Bot.F1Session.RaceControl.Message"},{"group":"F1 Session (functional)","id":"F1Bot.F1Session.SessionInfo","nested_context":"F1Bot.F1Session","nested_title":".SessionInfo","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"is_race?/1","id":"is_race?/1"},{"anchor":"new/0","id":"new/0"},{"anchor":"parse_from_json/1","id":"parse_from_json/1"},{"anchor":"push_lap_number/2","id":"push_lap_number/2"},{"anchor":"reset_counters/1","id":"reset_counters/1"},{"anchor":"update/2","id":"update/2"}]}],"sections":[],"title":"F1Bot.F1Session.SessionInfo"},{"group":"Output servers","id":"F1Bot.Output.Common","nested_context":"F1Bot.Output","nested_title":".Common","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"get_driver_abbr_by_number/2","id":"get_driver_abbr_by_number/2"},{"anchor":"get_driver_name_by_number/2","id":"get_driver_name_by_number/2"},{"anchor":"should_post_stats/1","id":"should_post_stats/1"}]}],"sections":[],"title":"F1Bot.Output.Common"},{"group":"Output servers","id":"F1Bot.Output.Discord","nested_context":"F1Bot.Output","nested_title":".Discord","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"F1Bot.Output.Discord"},{"group":"Output servers","id":"F1Bot.Output.Twitter","nested_context":"F1Bot.Output","nested_title":".Twitter","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"F1Bot.Output.Twitter"},{"group":"Plotting","id":"F1Bot.Plotting","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"check_file_ok/1","id":"check_file_ok/1"},{"anchor":"cleanup/1","id":"cleanup/1"},{"anchor":"create_temp_file_path/1","id":"create_temp_file_path/1"},{"anchor":"do_gnuplot/3","id":"do_gnuplot/3"},{"anchor":"plot_gap/2","id":"plot_gap/2"},{"anchor":"plot_lap_times/2","id":"plot_lap_times/2"},{"anchor":"verify_datasets_nonempty/1","id":"verify_datasets_nonempty/1"}]}],"sections":[],"title":"F1Bot.Plotting"},{"group":"Plotting","id":"F1Bot.Plotting.Gap","nested_context":"F1Bot.Plotting","nested_title":".Gap","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"plot/2","id":"plot/2"}]}],"sections":[],"title":"F1Bot.Plotting.Gap"},{"group":"Plotting","id":"F1Bot.Plotting.LapTime","nested_context":"F1Bot.Plotting","nested_title":".LapTime","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"plot/2","id":"plot/2"}]}],"sections":[],"title":"F1Bot.Plotting.LapTime"},{"group":"Other external APIs","id":"F1Bot.ExternalApi.Discord","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:post_message/1","id":"post_message/1"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"get_emoji/1","id":"get_emoji/1"},{"anchor":"get_emoji_or_default/2","id":"get_emoji_or_default/2"},{"anchor":"post_message/1","id":"post_message/1"}]}],"sections":[],"title":"F1Bot.ExternalApi.Discord"},{"group":"Other external APIs","id":"F1Bot.ExternalApi.Twitter","nodeGroups":[{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:post_tweet/1","id":"post_tweet/1"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"post_tweet/1","id":"post_tweet/1"}]}],"sections":[],"title":"F1Bot.ExternalApi.Twitter"},{"group":"Other external APIs","id":"F1Bot.ExternalApi.Discord.Commands","nested_context":"F1Bot.ExternalApi.Discord","nested_title":".Commands","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:internal_args/0","id":"internal_args/0"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:handle_interaction/2","id":"handle_interaction/2"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"handle_event/1","id":"handle_event/1"},{"anchor":"start_link/0","id":"start_link/0"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"F1Bot.ExternalApi.Discord.Commands"},{"group":"Other external APIs","id":"F1Bot.ExternalApi.Discord.Commands.Definition","nested_context":"F1Bot.ExternalApi.Discord","nested_title":".Commands.Definition","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:application_command_map/0","id":"application_command_map/0"},{"anchor":"t:command_option/0","id":"command_option/0"},{"anchor":"t:command_params/0","id":"command_params/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"cmd_driver_summary/1","id":"cmd_driver_summary/1"},{"anchor":"cmd_graph/1","id":"cmd_graph/1"},{"anchor":"option_driver/2","id":"option_driver/2"},{"anchor":"option_driver_list/2","id":"option_driver_list/2"},{"anchor":"option_plot_metric/2","id":"option_plot_metric/2"},{"anchor":"option_plot_style/2","id":"option_plot_style/2"}]}],"sections":[],"title":"F1Bot.ExternalApi.Discord.Commands.Definition"},{"group":"Other external APIs","id":"F1Bot.ExternalApi.Discord.Commands.Graph","nested_context":"F1Bot.ExternalApi.Discord","nested_title":".Commands.Graph","sections":[],"title":"F1Bot.ExternalApi.Discord.Commands.Graph"},{"group":"Other external APIs","id":"F1Bot.ExternalApi.Discord.Commands.OptionValidator","nested_context":"F1Bot.ExternalApi.Discord","nested_title":".Commands.OptionValidator","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"validate_driver/2","id":"validate_driver/2"},{"anchor":"validate_driver_list/2","id":"validate_driver_list/2"},{"anchor":"validate_graph_metric/2","id":"validate_graph_metric/2"},{"anchor":"validate_graph_style/2","id":"validate_graph_style/2"}]}],"sections":[],"title":"F1Bot.ExternalApi.Discord.Commands.OptionValidator"},{"group":"Other external APIs","id":"F1Bot.ExternalApi.Discord.Commands.Response","nested_context":"F1Bot.ExternalApi.Discord","nested_title":".Commands.Response","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:flags/0","id":"flags/0"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"combine_flags/1","id":"combine_flags/1"},{"anchor":"make_deferred_message/1","id":"make_deferred_message/1"},{"anchor":"make_followup_message/4","id":"make_followup_message/4"},{"anchor":"make_message/2","id":"make_message/2"},{"anchor":"send_followup_response/2","id":"send_followup_response/2"},{"anchor":"send_interaction_response/2","id":"send_interaction_response/2"}]}],"sections":[],"title":"F1Bot.ExternalApi.Discord.Commands.Response"},{"group":"Other external APIs","id":"F1Bot.ExternalApi.Discord.Commands.Summary","nested_context":"F1Bot.ExternalApi.Discord","nested_title":".Commands.Summary","sections":[],"title":"F1Bot.ExternalApi.Discord.Commands.Summary"},{"group":"Other external APIs","id":"F1Bot.ExternalApi.Discord.Console","nested_context":"F1Bot.ExternalApi.Discord","nested_title":".Console","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"post_message/1","id":"post_message/1"}]}],"sections":[],"title":"F1Bot.ExternalApi.Discord.Console"},{"group":"Other external APIs","id":"F1Bot.ExternalApi.Discord.Live","nested_context":"F1Bot.ExternalApi.Discord","nested_title":".Live","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"F1Bot.ExternalApi.Discord.Live"},{"group":"Other external APIs","id":"F1Bot.ExternalApi.Twitter.Console","nested_context":"F1Bot.ExternalApi.Twitter","nested_title":".Console","sections":[],"title":"F1Bot.ExternalApi.Twitter.Console"},{"group":"Other external APIs","id":"F1Bot.ExternalApi.Twitter.Live","nested_context":"F1Bot.ExternalApi.Twitter","nested_title":".Live","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"F1Bot.ExternalApi.Twitter.Live"}],"tasks":[{"group":"","id":"Mix.Tasks.Backtest","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"configure/0","id":"configure/0"},{"anchor":"parse_argv/1","id":"parse_argv/1"}]}],"sections":[],"title":"mix backtest"}]}