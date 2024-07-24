(function (window) {
  var svgSprite = '<svg>' +
      '<symbol id="suncaper-user" viewBox="0 0 1024 1024"><path d="M856.339597 799.428571q0 62.285714-35.714286 106.857143t-86 44.571429H246.625311q-50.285714 0-86-44.571429T124.911026 799.428571q0-48.571429 4.857143-91.714285t18-86.857143 33.428571-74.857143 53.714286-50.857143T311.768169 475.428571q74.857143 73.142857 178.857142 73.142858t178.857143-73.142858q43.428571 0 76.857143 19.714286t53.714286 50.857143 33.428571 74.857143 18 86.857143 4.857143 91.714285z m-146.285714-506.857142q0 90.857143-64.285714 155.142857T490.625311 512 335.482454 447.714286 271.19674 292.571429t64.285714-155.142858T490.625311 73.142857t155.142858 64.285714T710.053883 292.571429z"  ></path></symbol>' +
      '<symbol id="suncaper-quit" viewBox="0 0 1024 1024"><path d="M562.88 554.56c0 28.032-22.784 50.816-50.88 50.816s-50.816-22.72-50.816-50.816V113.792c0-28.032 22.784-50.816 50.816-50.816s50.88 22.784 50.88 50.816V554.56z"  ></path><path d="M86.016 535.36c0-152.064 80.32-285.76 200.512-360.64 23.488-14.976 54.912-7.808 69.76 16 14.848 23.872 7.68 55.104-16.064 69.952-91.584 57.536-152.448 158.656-152.448 274.56C188.16 714.24 332.928 859.072 512 859.456c179.072-0.448 323.776-145.28 324.096-324.224 0-118.656-64-221.952-159.296-278.656-24.192-14.336-32.128-45.568-17.856-69.76 14.4-24.128 45.632-32.064 69.824-17.792 124.928 73.792 209.344 210.176 209.344 366.08 0 235.136-190.656 425.856-425.92 425.856-235.456 0.384-426.176-190.272-426.176-425.6"  ></path></symbol>' +
      '<symbol id="suncaper-user1" viewBox="0 0 1024 1024"><path d="M819.2 729.088V757.76c0 33.792-27.648 61.44-61.44 61.44H266.24c-33.792 0-61.44-27.648-61.44-61.44v-28.672c0-74.752 87.04-119.808 168.96-155.648 3.072-1.024 5.12-2.048 8.192-4.096 6.144-3.072 13.312-3.072 19.456 1.024C434.176 591.872 472.064 604.16 512 604.16c39.936 0 77.824-12.288 110.592-32.768 6.144-4.096 13.312-4.096 19.456-1.024 3.072 1.024 5.12 2.048 8.192 4.096 81.92 34.816 168.96 79.872 168.96 154.624z"  ></path><path d="M359.424 373.76a168.96 152.576 90 1 0 305.152 0 168.96 152.576 90 1 0-305.152 0Z"  ></path></symbol>' +
      '<symbol id="suncaper-menu-fold" viewBox="0 0 1024 1024"><path d="M112 224h800c26.5 0 48-21.5 48-48s-21.5-48-48-48H112c-26.5 0-48 21.5-48 48s21.5 48 48 48z m0 336h480c26.5 0 48-21.5 48-48s-21.5-48-48-48H112c-26.5 0-48 21.5-48 48s21.5 48 48 48z m669.3-204.4c-1.5-1.3-3.3-2-5.3-2-4.4 0-8 3.6-8 8v300.3c0 1.9 0.7 3.8 2 5.3 2.9 3.3 8 3.7 11.3 0.8l165.1-144c0.5-0.5 1.1-1 1.5-1.5 5.8-6.7 5.1-16.8-1.5-22.6L781.3 355.6zM912 800H112c-26.5 0-48 21.5-48 48s21.5 48 48 48h800c26.5 0 48-21.5 48-48s-21.5-48-48-48z"  ></path></symbol>' +
      '<symbol id="suncaper-menu-unfold" viewBox="0 0 1024 1024"><path d="M113 224h800c26.5 0 48-21.5 48-48s-21.5-48-48-48H113c-26.5 0-48 21.5-48 48s21.5 48 48 48z m800 240H433c-26.5 0-48 21.5-48 48s21.5 48 48 48h480c26.5 0 48-21.5 48-48s-21.5-48-48-48zM243.7 355.6L78.6 499.9c-6.7 5.8-7.3 15.9-1.5 22.6 0.5 0.5 1 1.1 1.5 1.5l165.1 144c3.3 2.9 8.4 2.6 11.3-0.8 1.3-1.5 2-3.3 2-5.3V361.6c0-4.4-3.6-8-8-8-1.9 0-3.8 0.7-5.3 2zM913 800H113c-26.5 0-48 21.5-48 48s21.5 48 48 48h800c26.5 0 48-21.5 48-48s-21.5-48-48-48z"  ></path></symbol>' +
      '<symbol id="suncaper-icon-500" viewBox="0 0 1024 1024"><path d="M752.35681 617.160942l192.94859 96.937463-13.843417 27.568139-192.964072-96.937462-12.976429 25.844485a19.274991 19.274991 0 0 1-25.87803 8.571823l-32.73394-16.44438a16.694671 16.694671 0 0 1-1.682368-0.957298l-12.161048 24.211142a19.274991 19.274991 0 0 1-25.883191 8.571824l-79.249368-39.814338a19.280151 19.280151 0 0 1-8.571824-25.88319l5.23547-10.421913a20.188424 20.188424 0 0 1-1.7701-0.781837l-8.607947-4.324616 19.907169-39.625975 8.613108 4.329777c0.580572 0.294156 1.137921 0.611536 1.682369 0.949558l26.912737-53.577765a19.680101 19.680101 0 0 1-1.770099-0.781837l-8.613108-4.329777 19.912329-39.625975 8.613108 4.329777c0.580572 0.294156 1.137921 0.611536 1.682369 0.949558l8.693098-17.308786a19.26983 19.26983 0 0 1 25.87803-8.574404l79.254529 39.814338a19.280151 19.280151 0 0 1 8.571823 25.88319l-11.299221 22.482328c0.593474 0.224488 1.189528 0.48252 1.770099 0.776677l32.739101 16.444379a19.282732 19.282732 0 0 1 8.566662 25.88319l-12.976429 25.841905z m-217.920927-120.263555c-10.463198-5.253532-14.682021-18.002893-9.42849-28.468671l0.866988-1.726234a21.199909 21.199909 0 0 1 28.468671-9.425909l41.354788 20.766416-19.912329 39.625974-41.349628-20.771576z m-5.392869 113.802434l-41.344468-20.768996a21.20765 21.20765 0 0 1-9.425909-28.473831l0.861827-1.721074a21.210231 21.210231 0 0 1 28.473831-9.431069l41.339307 20.774156-19.904588 39.620814zM475.207217 374.456041l-91.309785-45.87809a19.285312 19.285312 0 0 0-25.88577 8.576984l-11.252776 22.394598-41.339307-20.766416a19.274991 19.274991 0 0 0-25.88577 8.569243l-11.252776 22.399758-174.00388-87.418662-15.582553 31.007706 174.011621 87.416081-10.390948 20.676105a19.274991 19.274991 0 0 0 8.576984 25.88319l41.341887 20.766415-12.117183 24.120832a19.280151 19.280151 0 0 0 8.576984 25.88319l91.309784 45.87551a19.280151 19.280151 0 0 0 25.88319-8.574404l77.897282-155.04885a19.282732 19.282732 0 0 0-8.576984-25.88319z m-137.293668 115.786701l-1.726234-0.869568a2.882217 2.882217 0 0 1-1.282419-3.878221l54.527323-108.541162c0.712168-1.426917 2.451304-1.999748 3.878221-1.282419l1.726234 0.861827c1.426917 0.719909 2.002328 2.459045 1.282419 3.883382l-54.527323 108.536001a2.889958 2.889958 0 0 1-3.878221 1.29016z m20.655462 12.927403l-1.721073-0.861827a2.897699 2.897699 0 0 1-1.290161-3.883382l54.527323-108.536001a2.892539 2.892539 0 0 1 3.885962-1.282419l1.721074 0.861827c1.426917 0.719909 2.007489 2.451304 1.29016 3.883382l-54.527323 108.536001a2.892539 2.892539 0 0 1-3.885962 1.282419z m79.068746-96.885856l-54.527322 108.538581c-0.712168 1.429497-2.451304 2.002328-3.878221 1.282419l-1.726234-0.861827a2.889958 2.889958 0 0 1-1.282419-3.883381l54.527322-108.536001a2.892539 2.892539 0 0 1 3.878221-1.29016l1.726234 0.869567c1.426917 0.714749 2.002328 2.453884 1.282419 3.880802z" fill="#C1CBD3" ></path></symbol>' +
      '<symbol id="suncaper-icon-404" viewBox="0 0 1024 1024"><path d="M216.054267 633.705341v-243.580982H186.641347l-166.169191 249.773719v19.089111h166.169191v107.343352h29.41034v-107.340772h53.159485v-25.287008H216.054267z m-29.41292-138.823098v138.817937H55.04827l102.182738-149.139165a678.228539 678.228539 0 0 0 29.934142-52.124782h2.577726c-1.550765 17.546088-3.101529 45.410823-3.101529 62.44601zM950.370939 633.705341v-243.580982H920.96318l-166.171772 249.776299v19.089111h166.171772v107.343353h29.405179v-107.340772h53.156905v-25.287009h-53.154325z m-29.410339-138.823098v138.817937h-131.595658l102.180158-149.139165a670.58825 670.58825 0 0 0 29.931561-52.124782h2.582888c-1.553345 17.546088-3.098949 45.410823-3.098949 62.44601z" fill="#C1CBD3" ></path><path d="M520.277625 581.830849m-184.685475 0a184.685475 184.685475 0 1 0 369.37095 0 184.685475 184.685475 0 1 0-369.37095 0Z" fill="#FBFCFD" ></path><path d="M481.020834 400.793928a183.227601 183.227601 0 0 0-29.50065 9.229758c0.325119 1.078568 0.846341 2.144235 1.545604 3.173778 2.420328 3.602109 4.737444 3.315695 9.472307 4.316854-0.50058 5.506375-6.933285 5.54508-11.275942 4.954189-5.196738-0.712165-10.654088-2.43839-15.148982 2.110691 2.484836 1.493998 9.299426 7.320331 8.396319 1.235967 4.974832-0.247709 9.776783-0.392207 14.645822 0.196104 1.953292 0.247709 8.478889 2.430649 10.25414 1.442391 0.740548-0.42317 1.537863-4.094947 2.317116-5.219961-1.388205 0.010321-2.871882-0.694103-4.252346-0.559926 3.220223-4.136232 6.430125-0.892786 10.530233 1.01148-4.512957 2.742866-1.834598 9.32523 2.577727 3.981414 3.620171-4.399423-0.890206-7.583522-5.488313-10.156089 4.639392-5.810851 7.495792-6.337234 11.871992 0.227067 0.717325-4.045921 3.983994-2.425489 7.387419-2.126173v-1.016641c-1.499158 0.041285-3.098949-0.825698-4.582625-0.67604 3.478254-5.542499 1.251449-6.817171 6.22112-8.623386 3.95045-1.447552 15.228972-0.103212 16.617177-3.818855-7.89832 1.537863-17.427394 1.899106-24.554201 5.498635-3.065405 1.553345-6.72428 6.440446-9.797426 3.264088-2.404846-2.500317 0.178041-6.148872 2.763509-8.445345zM545.177588 397.914306c-0.642496 0.970195 0.08515 1.821697-1.452713 2.957031-3.981414 2.93897-11.043714 5.37994-15.781158 7.235181 6.019856-0.015482 20.59343 5.650872 23.398224-2.802213-1.942971-0.296735-3.883362-0.598631-5.826333-0.900527a50.014091 50.014091 0 0 1 9.58068-4.920646 177.238709 177.238709 0 0 0-9.9187-1.568826zM517.139972 545.376271c0.025803-0.033544 0.054186-0.059347 0.074828-0.098051-0.08515-0.412849-0.162559-0.779253-0.188362-1.032123 0.038705 0.368984 0.07999 0.75345 0.113534 1.130174zM533.821656 763.066453c1.130174-3.080887 3.798212-4.843236 4.920646-7.826071 0.536704-1.414008 0.092891-1.966194 0.547025-3.36214 1.555925-4.817433 0.874724-3.000897 0.00258-6.742342-2.046183-8.767883 0.727647-11.170149 3.117011-19.200065 2.451292-8.249242 2.216484-18.957516 3.795632-27.846673 0.745709-4.249766 1.971355-13.105379 0.487678-17.130659-1.666878-4.533599-8.976888-8.099584-12.323546-11.139185-4.742604-4.327175-7.258404-8.997531-10.783103-14.354248-1.785572-2.719644-3.818854-5.38252-5.214801-8.331811-2.982835-6.311431 0.00258-2.557084 0.495419-6.288208 0.485098-3.602109-0.425751-6.824912 1.003739-10.594741 1.576568-4.177517 5.527018-6.783627 6.822332-10.997269 1.161138-3.754347 0.276093-8.463407-3.571145-9.722596-2.144235-0.699263-4.507796 0.913429-6.662352 0.562507-3.006058-0.485098-6.406902-2.737706-8.762723-4.53102-3.282151-2.513219-4.525859-6.595265-8.024755-8.976888-2.94155-1.989417-5.021277-0.802475-8.161511-1.723645-3.27957-0.967615-5.299951-5.008376-7.934444-6.285628-3.963352-1.888785-6.195317 0.825698-10.375415 0.276093-3.560824-0.467036-8.976888-4.417486-12.310644-5.903742-6.757824-3.034441-10.875994-6.375939-13.582737-13.247297-2.311955-5.888261-5.686997-8.644029-9.658089-13.544031-4.03302-4.974832-5.289629-9.203955-11.490107-10.532813-0.730227-0.162559 1.517221 5.2148 1.749448 5.645711 2.213903 4.110429 5.54508 7.869936 8.226019 11.691372 3.934968 5.643131 2.260349 6.703638-1.749448 1.243708-4.582625-6.241763-9.905799-12.44224-13.884632-19.047827-1.501739-2.502898-1.215325-4.11559-3.692419-6.484311-2.399686-2.296473-5.537339-3.403425-7.942185-5.583785-8.680153-7.81317-10.261881-18.250512-9.273624-29.400018 0.322538-3.630492 1.635915-6.535918 1.055346-10.027073-0.485098-2.900265-2.190681-5.302531-4.324595-7.436445-0.688942-1.09663-2.420328-3.800792-2.518379-3.973673-1.973935-3.27699-3.498896-6.499793-6.63397-9.188473-1.666878-1.450133-5.841815-4.698739-9.944503-7.591263-25.410863 31.642305-40.616613 71.815105-40.616613 115.548728 0 101.996956 82.685938 184.685475 184.685475 184.685475 5.356717 0 10.664409-0.242549 15.907593-0.694103 0.327699-1.00632-0.353502-1.806215-3.380203-1.945551zM599.784625 633.759527c-0.495419-0.07999-1.617852 0.054186-2.064246-0.268351-0.270932 0.952133 0.141917 1.305635 2.064246 0.268351z" fill="#C1CBD3" ></path><path d="M691.671938 623.136403c-3.602109-3.137653-7.857035-7.343554-10.414119-11.402376-2.742866-4.332335-1.050185-8.783365-0.851501-13.742715 0.162559-4.169776-1.873303-10.104482-0.098052-13.86399 0.807636-1.710744 2.673198-2.283572 3.44471-3.684678 1.630754-2.975094 1.26435-4.992894 3.269249-7.547398 2.146815-2.742866 5.029018-3.418907 7.420963-5.576044 2.505478-2.257769 2.43323-4.03818 4.020118-6.935865 1.019221-1.85266 3.230544-4.783889 5.496054-6.71912a176.002742 176.002742 0 0 0-1.352081-7.90348 22.149355 22.149355 0 0 1-3.173777 0.518642c-2.131334 0.07999-3.710481-1.334019-5.235443-2.660297-1.558505-1.349501-3.387943-3.168617-4.489734-4.915485-1.181781-1.875883-0.454134-3.793051-0.371565-5.932126 0.061927-1.790733-0.807636-4.355558-0.049026-5.97341 0.348341-0.735387 1.150817-0.985677 1.486257-1.589469 0.699263-1.282413 0.544445-2.149396 1.406268-3.248607 0.92117-1.189522 2.175199-1.478516 3.202161-2.412587l0.069668-0.072249a184.685475 184.685475 0 0 0-41.032042-66.417102c-6.737182 0.201264-11.606221 0.376725-17.159042 4.218802-2.335178 1.620433-3.924647 3.764668-6.902321 4.598107-2.657716 0.750869-5.537339 0.092891-8.179573 0.990838-9.526494 3.243446-8.017014 23.692379-20.58827 20.601171-5.896002-1.452713-10.055456-8.437604-13.02797-12.994426-2.621592-4.014958-7.379678-7.330652-4.162035-12.349349-1.463034 0.376725-3.037021-0.054186-4.471672 0.224486 2.007479-4.425227 8.762723-4.0356 9.882575-6.298529 2.797053-5.663774-7.697056-6.257245-10.67473-7.041658 3.586627-3.818854 5.398002 1.287573 8.933023 0.42059 3.393104-0.8386-1.790733-5.323173-3.829175-5.826333-0.730227-0.178041-12.697691 3.310534-5.769567-2.892524-8.548557-5.457349-17.094534-10.912118-25.643091-16.377209-1.439811 6.074043 11.381734 9.516172 15.561832 11.665568-0.650237 2.510639-4.546501 6.161773-7.521595 5.090946-2.812535-1.01148-1.669459-5.668935-5.911484-5.20448-3.031861 7.049399 6.399161 4.992894 7.273886 9.307168 0.998579 4.923226-3.563404 2.838338-5.323174 2.748027-0.41801-0.020642-3.689839-3.406005-3.862719-0.846341-0.211585 3.052503 5.2148 1.862982 5.596686 4.936127-6.316592 0.260611-9.544556-2.022961-14.689688-5.447028-6.001794-3.991735-9.085261-3.627912-16.439136-3.627911 2.203582-0.908268 5.225122-1.576568 7.111326-3.037022 1.021802-0.799895 5.065143-4.721962 5.323173-5.599266 1.137915-3.78273-0.056767-3.493736-3.674357-5.96825-3.212482-2.203582-7.106166-6.148872-11.002429-6.935865-14.093637-2.817695-4.347817 12.746717-15.04577 14.893532 0.178041 0.007741 0.376725 0.015482 0.539284 0.015482h-0.611533c0.030964 0 0.054186-0.010321 0.072249-0.015482-2.477095-0.090311-7.116487-0.696683-8.713697 0.616693-1.130174 0.913429-1.225646 4.616169-2.479675 5.960509-2.239706 2.391945-5.583784 2.866721-8.251822 4.590367-2.616431 1.67978-8.362775 6.009535-9.900638 8.940763-5.645712 10.806326 12.733815 14.160725 19.698064 17.319021 3.150555 1.42949 12.344189 3.385363 14.057512 5.764406 2.301634 3.202161-1.984256 6.203058 2.820276 8.453086 1.532702 0.712165 4.685838 0.864403 6.012115-0.621854 2.139075-2.420328-0.872144-2.962192-1.388205-5.759246-0.993418-5.37994 0.647657-3.243446 3.349239-5.240603 5.511536-4.071724 4.265247-4.322014 2.288732-10.806326-0.913429-3.02154-4.386522-11.451403-1.34176-13.685948 3.978833-2.908006 12.475784 1.571407 15.530868 1.950712 3.558243 0.438652 5.568303 5.367039 7.506113 7.382258 1.287573 1.34434 3.594368 4.177517 5.836655 3.870461 3.571145-0.485098 2.079727-3.607269 4.138812-5.049661 5.54766-3.852398 7.018435 1.383045 9.224598 6.615907 2.079727 4.918065 4.045921 6.742342 7.753823 9.900638 1.721065 1.465614 9.258142 6.713959 8.548557 9.944503-0.485098 2.180359-9.090422 5.477992-11.399797 6.203058-8.419542 2.670618-24.20586-4.365879-25.898541 8.994951 3.269249-1.217905 12.550613-8.811748 15.332184-5.214801 1.272091 1.635915-1.01148 4.014958-0.469616 5.640551 1.584309 4.866459 5.330914 3.171197 9.263302 2.384204a7.085523 7.085523 0 0 1-0.828278 0.443813c5.367039-2.763509 4.809692-2.190681 7.271305-6.667513 0.807636-1.460454 1.997158-5.003215 3.135073-6.058561 3.904005-3.599528 4.502636-1.125014 6.925544 1.656557 0.632175 0.732807 6.613327 9.348452 4.479413 8.920121-6.951347-1.395946-13.626601-1.210164-19.398748 2.598369-3.320855 2.201002-6.466249 5.163194-10.432181 6.621068-0.949553 0.348341-7.998952 1.016641-7.157772-0.185782 1.217905-1.754609 5.403163-2.913167 7.041658-4.801951-4.569724-1.883624-8.385998 2.275831-11.988107 4.71164-3.816274 1.806215-4.693578 5.170935-7.947345 8.122807-1.416589 1.290154-4.097528 1.506899-5.490894 3.197-1.34434 1.646236-1.519801 4.231704-2.797052 5.782468-0.900527 1.09663-3.19442 0.438652-4.138813 2.084888-1.225646 2.154556 1.125014 4.146553 0.601212 5.702479-0.934071 2.820276-6.290789 5.20964-8.336972 7.235181 0.268352-0.268352 0.547025-0.534124 0.807636-0.807637-2.059085 2.170038-4.672936 3.759507-6.280467 6.270147 0.737968 3.542762 3.065405 11.980365 2.420328 13.923336-2.144235 6.394001-6.30627-3.473093-7.998952-6.022436-5.808271-8.757562-17.406751-2.895104-25.328294-2.170039-10.138026 0.92375-20.056726 14.098798-13.814964 24.78643 3.000897 5.119329 8.047978 7.108746 13.840767 5.924384 5.152873-1.057926 6.703638-8.275045 11.557195-8.4118 8.920121-0.239969 0.196103 8.754982-0.577988 12.047453-0.712165 3.062824 1.112112 3.341498 4.247185 4.097528 2.317116 0.557346 5.604427-0.995999 7.611906 0.33544 1.269511 0.833439 1.207584 5.426386 2.957031 3.976253-3.429228 2.848659-2.634493 9.598742 0.887626 12.039712 3.901424 2.706742 8.48921 0.193523 12.568676 1.235967 7.704797 1.976515 4.03302-0.58831 10.801165-4.678096 4.569724-2.755768 5.320593 0.516061 8.440184 0.531543 2.118432 0.007741 3.475674-3.065405 7.028756-2.167458 2.895104 0.727647 4.03302 2.962192 7.493212 3.488575 1.421749 0.211585 2.879623-0.534124 4.236864-0.381885 6.396581 0.707004 11.291424 4.801951 16.328183 8.504692 4.151714 3.049923 6.904902 2.422908 11.761039 3.816274 3.542762 1.016641 10.078679 6.148872 9.743239 10.656668-0.054186 0.807636-3.160876 4.863879-3.692419 6.690736 0.910848 0.627015 7.214538-0.786994 9.064619-0.913429-0.603792 0.701844-4.897423 3.725963-4.897423 2.123593 0 0.817957 3.042182 2.515799 3.78015 3.037021 2.239706-7.279046 5.919224-2.595789 10.349611-0.794735 3.764668 1.540443 8.40406 1.615272 12.419018 2.577727 3.406005 0.807636 10.92502 3.11185 13.453721 5.898582 3.044762 3.36214 0.934071 8.816909-1.310796 12.160987-2.946711 4.37362-7.377098 6.066302-9.214277 11.216595-1.452713 4.087206-0.366404 8.213117-1.189521 12.738975-1.127594 6.128229-2.0178 3.983994-5.96825 7.720279-3.313114 3.150555-0.054186 2.60611-4.569724 4.608428-4.54134 2.012639-8.535656 1.419169-11.668148 6.396581 0.126435-0.309637 0.229647-0.627015 0.312217-0.952133-1.326278 1.860401-1.989417 5.653453-2.613851 6.910062-1.581728 3.178938-3.764668 5.191578-6.275307 7.841553-0.959874 1.019221-9.781944 13.076996-10.282523 12.109381-0.657978-1.26177-7.611906 1.26177-7.944766-0.534123 0.270932 1.51206-0.061927 1.0089 1.664298 1.881043-1.59463 9.9187-5.787629 11.399796-15.515386 11.495268 0.8386 4.770988-3.519539 3.816274-5.54766 6.381099-1.184361 1.496578-1.752028 5.707639-2.572566 7.64545-0.50316 1.220485-4.303952 6.092105-4.303952 7.05972-0.005161 0.624434 0.629595 1.452713 1.42949 2.324857 69.67087-13.378892 125.413242-65.885559 143.472811-133.781178-3.044762-1.101791-5.617328-3.341498-8.117646-5.524438z" fill="#C1CBD3" ></path><path d="M597.671354 633.473113l0.051606 0.020643 0.00258-0.00258z" fill="#C1CBD3" ></path><path d="M550.459476 627.507444c-118.049046 91.9415-226.527733 150.070656-242.288248 129.830727-8.535656-10.950823 11.874573-42.629252 51.061695-83.929646 0.75603 1.367563 1.499158 2.655136 2.224225 3.875621-37.094494 38.449155-56.606775 67.389878-49.216776 76.885408 14.013647 17.989901 119.246308-40.544364 235.050487-130.733835 115.801599-90.186891 198.322397-177.886366 184.313911-195.876266-7.103585-9.113644-37.644099 1.444972-81.09647 25.782428a204.90218 204.90218 0 0 0-3.191839-3.062825c46.760324-25.674055 80.152077-36.436515 88.357453-25.895961 15.763096 20.245089-67.165392 111.185429-185.214438 203.124349z" fill="#E7E7E7" ></path><path d="M803.907552 294.503341l14.578735 12.867991a1.718484 1.718484 0 0 1 0.152238 2.417748l-0.988257 1.122434a1.721065 1.721065 0 0 1-2.420328 0.152238l-14.573574-12.865411a1.710744 1.710744 0 0 1-0.157399-2.410007l0.988257-1.130174a1.721065 1.721065 0 0 1 2.420328-0.154819z" fill="#ABAAAA" ></path><path d="M800.996966 293.930513l-15.88437 0.237388s5.805691-6.466249 11.792003-12.398375c5.986312-5.921805 9.681312-2.569986 9.681312-2.569986l-5.588945 14.730973zM832.608307 313.334422c-5.114169 6.662353-10.801165 13.208592-10.801165 13.208592l-1.76493-15.765676 13.889793-7.351295c0.005161 0 3.787891 3.248607-1.323698 9.908379z" fill="#C1CBD3" ></path><path d="M850.497576 257.530122l-39.726407 45.023777 9.131707 8.058299s11.441081-3.269249 20.516021-13.242136c14.444559-15.861147 10.089-39.778013 10.078679-39.83994z" fill="#EFEEED" ></path><path d="M836.989669 283.503492a7.054559 7.054559 0 0 1-10.576679-9.33297 7.054559 7.054559 0 0 1 10.576679 9.33297z m-1.76235-8.669831a5.341236 5.341236 0 1 0-7.070041 8.017014 5.351557 5.351557 0 0 0 7.549978-0.477357 5.341236 5.341236 0 0 0-0.479937-7.539657zM836.045276 258.717063a14.421336 14.421336 0 0 0 4.850978 9.750981 14.434237 14.434237 0 0 0 9.941922 3.589207c0.807636-8.226019-0.325119-14.480683-0.325118-14.480683s-6.484312-0.379305-14.467782 1.140495zM817.410299 299.8678c-4.244605 4.809692-15.118019 12.308064-15.118019 12.308064s6.355296-11.397216 10.785684-16.418493c4.425227-5.023858 7.165513-3.934968 7.165512-3.934969s1.883624 2.704162-2.833177 8.045398z" fill="#C1CBD3" ></path></symbol>' +
      '<symbol id="suncaper-icon-403" viewBox="0 0 1024 1024"><path d="M780.051999 657.456143h15.853447l5.645726-6.979748h-15.845706z" fill="#EAEBEA" ></path><path d="M768.755387 671.405318h15.848285l5.650887-6.974587h-15.848286z" fill="#E9E9EA" ></path><path d="M774.406273 664.430731h15.848286l5.650887-6.974588h-15.853447z" fill="#E9EBEA" ></path><path d="M785.705466 650.476395h15.845706l5.656047-6.977167h-15.853446z" fill="#ECEDEC" ></path><path d="M797.007239 636.52464h15.845706l5.656047-6.979748h-15.856027z" fill="#EEEFEF" ></path><path d="M791.353773 643.499228h15.853446l5.645726-6.974588h-15.845706z" fill="#ECEDEC" ></path><path d="M734.855228 713.265745h15.845705l5.653467-6.977168h-15.853446z" fill="#E3E5E4" ></path><path d="M746.154421 699.313989h15.845705l5.656047-6.979748h-15.853446z" fill="#E5E6E5" ></path><path d="M763.10192 678.385066h15.853446l5.648306-6.979748h-15.848285z" fill="#E8EAE9" ></path><path d="M802.652965 629.544892h15.856027l5.645726-6.974587H808.309013z" fill="#EEEFEF" ></path><path d="M740.500954 706.288577h15.853446l5.645726-6.974588h-15.845705z" fill="#E5E6E4" ></path><path d="M757.458774 685.359654h15.845706l5.650886-6.974588h-15.853446z" fill="#E7E9E7" ></path><path d="M751.802727 692.334241h15.853446l5.648307-6.974587h-15.845706z" fill="#E6E8E6" ></path><path d="M830.904818 594.666794h15.853446l5.648307-6.979748h-15.848286z" fill="#F3F3F3" ></path><path d="M870.458444 545.82662h15.848286l5.656047-6.974587h-15.850866z" fill="#F8FAFA" ></path><path d="M853.505784 566.755543h15.853447l5.648306-6.974587h-15.845705zM859.161832 559.780956h15.845705l5.650886-6.974588h-15.853446z" fill="#F7F7F6" ></path><path d="M864.804977 552.806368h15.853446l5.648307-6.979748h-15.848286z" fill="#F7F9F9" ></path><path d="M808.309013 622.570305h15.845705l5.653467-6.974588h-15.853446z" fill="#EFF0F0" ></path><path d="M881.757637 531.877445l-5.645726 6.974588h15.850866l5.645726-6.974588z" fill="#FAFBFB" ></path><path d="M903.25939 524.897697h-15.848286l-5.653467 6.979748h15.850866z" fill="#FBFCFB" ></path><path d="M825.259092 601.641382h15.848286l5.650886-6.974588h-15.853446z" fill="#F2F3F3" ></path><path d="M819.605625 608.615969h15.850866l5.650887-6.974587h-15.848286z" fill="#F1F1F1" ></path><path d="M813.954739 615.595717h15.853446l5.648306-6.979748h-15.850866z" fill="#F0F0EF" ></path><path d="M842.206591 580.712459h15.853447l5.645726-6.977168h-15.845706zM836.558285 587.687046h15.848286l5.653467-6.974587h-15.853447z" fill="#F4F4F5" ></path><path d="M847.860058 573.735291h15.845706l5.653467-6.979748h-15.853447z" fill="#F5F6F5" ></path><path d="M262.177916 657.456143h20.642508l7.359054-6.979748h-20.642508z" fill="#EAEBEA" ></path><path d="M247.462388 671.405318h20.642508l7.359054-6.974587h-20.642508z" fill="#E9E9EA" ></path><path d="M254.821442 664.430731h20.642508l7.356474-6.974588h-20.642508z" fill="#E9EBEA" ></path><path d="M269.53697 650.476395h20.642508l7.356474-6.977167h-20.642508z" fill="#ECEDEC" ></path><path d="M284.252498 636.52464h20.642508l7.359054-6.979748h-20.642508z" fill="#EEEFEF" ></path><path d="M276.893444 643.499228h20.642508l7.359054-6.974588h-20.642508z" fill="#ECEDEC" ></path><path d="M203.310643 713.265745h20.642508l7.356474-6.977168h-20.642508z" fill="#E3E5E4" ></path><path d="M218.026171 699.313989h20.642508l7.359054-6.979748h-20.642508z" fill="#E5E6E5" ></path><path d="M240.103333 678.385066h20.642509l7.359054-6.979748h-20.642508z" fill="#E8EAE9" ></path><path d="M291.611552 629.544892h20.642508l7.361635-6.974587h-20.642509z" fill="#EEEFEF" ></path><path d="M210.667117 706.288577h20.642508l7.359054-6.974588h-20.642508z" fill="#E5E6E4" ></path><path d="M232.744279 685.359654h20.642508l7.359055-6.974588h-20.642509z" fill="#E7E9E7" ></path><path d="M225.385225 692.334241h20.642508l7.359054-6.974587h-20.642508z" fill="#E6E8E6" ></path><path d="M328.401662 594.666794h20.642508l7.364215-6.979748h-20.645088z" fill="#F3F3F3" ></path><path d="M379.915041 545.82662h20.642508l7.361635-6.974587h-20.642508z" fill="#F8FAFA" ></path><path d="M357.837879 566.755543h20.642508l7.361634-6.974587h-20.642508zM365.199513 559.780956h20.642508l7.356474-6.974588h-20.642508z" fill="#F7F7F6" ></path><path d="M372.555987 552.806368h20.642508l7.359054-6.979748h-20.642508z" fill="#F7F9F9" ></path><path d="M298.973186 622.570305h20.642509l7.356473-6.974588h-20.642508z" fill="#EFF0F0" ></path><path d="M394.630569 531.877445l-7.353893 6.974588h20.642508l7.351313-6.974588z" fill="#FAFBFB" ></path><path d="M422.634712 524.897697h-20.642508l-7.361635 6.979748h20.639928z" fill="#FBFCFB" ></path><path d="M321.047769 601.641382h20.642508l7.353893-6.974588h-20.642508z" fill="#F2F3F3" ></path><path d="M313.688714 608.615969h20.642509l7.359054-6.974587h-20.642508z" fill="#F1F1F1" ></path><path d="M306.32966 615.595717h20.642508l7.359055-6.979748h-20.642509z" fill="#F0F0EF" ></path><path d="M343.11977 580.712459h20.642509l7.361634-6.977168h-20.642508zM335.763297 587.687046h20.645088l7.353894-6.974587h-20.642509z" fill="#F4F4F5" ></path><path d="M350.481405 573.735291h20.642508l7.356474-6.979748h-20.642508z" fill="#F5F6F5" ></path><path d="M203.310643 713.265745V398.464915h20.642508v314.80083z" fill="#EAECEF" ></path><path d="M729.694601 713.265745V398.464915h20.642508v314.80083z" fill="#EAECEF" ></path><path d="M729.694601 398.464915h20.642508v51.60627h-20.642508zM203.310643 398.464915h20.642508v51.60627h-20.642508z" fill="#D2D5D7" ></path><path d="M120.74061 305.573628h701.847858v108.373168H120.74061z" fill="#B1BBC7" ></path><path d="M232.682352 413.946796h123.855049l91.103129-108.373168h-123.852468zM705.669302 305.573628h-123.855049l-91.100549 108.373168h123.852468zM120.74061 387.493422l68.871149-81.919794H120.74061zM822.588468 413.946796v-87.839033l-73.845993 87.839033z" fill="#EAECEF" ></path></symbol>' +

    '<symbol id="报名审批" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="design-iconfont">\n' +
    '  <g stroke="#FFF" stroke-linejoin="round" fill="none" fill-rule="evenodd">\n' +
    '    <path d="M9,18 C13.970565,18 18,13.970565 18,9 C18,4.029435 13.970565,0 9,0 C4.029435,0 0,4.029435 0,9 C0,13.970565 4.029435,18 9,18 Z" transform="translate(1 1)"/>\n' +
    '    <path stroke-linecap="round" d="M9.00378 3.600045L9.00324 9.004005 12.81897 12.819735" transform="translate(1 1)"/>\n' +
    '  </g>\n' +
    '</symbol>\n' +

    '<symbol id="监考记录" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="design-iconfont">\n' +
    '  <g stroke="#FFF" stroke-linejoin="round" fill="none" fill-rule="evenodd">\n' +
    '    <path d="M0,15 L0.00216091724,11.1496452 C0.00258278829,10.8825484 0.212402696,10.6660645 0.471178395,10.6657742 C2.03393406,10.6657742 3.59673191,10.6657742 5.15952975,10.6657742 C5.59147883,10.6657742 5.58918198,10.2702581 5.58918198,9.32864516 C5.58918198,8.38703226 3.29157852,7.59391935 3.29157852,4.2836129 C3.29157852,0.97331129 5.67177495,0 7.64992828,0 C9.62808161,0 11.7826708,0.97331129 11.7826708,4.2836129 C11.7826708,7.59391935 9.49711409,8.12022581 9.49711409,9.32864516 C9.49711409,10.5370161 9.49711409,10.6657742 9.86301691,10.6657742 C11.4190648,10.6657742 12.9751596,10.6657742 14.5312544,10.6657742 C14.7900957,10.6657742 15,10.8824516 15,11.1496452 L15,15 L0,15 Z"transform="translate(3 1)"/>' +
    '    <path stroke-linecap="round" d="M0 17L15 17" transform="translate(3 1)"/>\n' +
    '  </g>\n' +
    '</symbol>\n' +

  '</svg>'
  var script = (function () {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }())
  var shouldInjectCss = script.getAttribute('data-injectcss')
  var ready = function (fn) {
    if (document.addEventListener) {
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function () {
          document.removeEventListener('DOMContentLoaded', loadFn, false)
          fn()
        }
        document.addEventListener('DOMContentLoaded', loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded (w, fn) {
      var d = w.document
      var done = false
      var init = function () {
        if (!done) {
          done = true
          fn()
        }
      }
      var polling = function () {
        try {
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        init()
      }
      polling()
      d.onreadystatechange = function () {
        if (d.readyState === 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }
  var before = function (el, target) {
    target.parentNode.insertBefore(el, target)
  }
  var prepend = function (el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg () {
    var div, svg
    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>')
    } catch (e) {
      console && console.log(e)
    }
  }
  ready(appendSvg)
})(window)
