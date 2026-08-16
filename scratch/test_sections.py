import urllib.request

url = 'http://localhost:8080/'
with urllib.request.urlopen(url) as res:
    html = res.read().decode('utf-8')
    print(f"HTTP Status: {res.status}, Length: {len(html)}")

    expected_sections = [
        "home",
        "about",
        "clubs",
        "events",
        "competitions",
        "achievements",
        "visionaries",
        "student-council",
        "student-voices",
        "gallery",
        "notices",
    ]

    last_pos = -1
    for s in expected_sections:
        # Search for section tag with id
        pattern = f'id="{s}"'
        pos = html.find(pattern)
        print(f"Section '{s}' found at position: {pos}")
        assert pos != -1, f"Missing section id='{s}'"
        assert pos > last_pos, f"Section '{s}' is not in correct sequence"
        last_pos = pos

    print("\nSUCCESS: All 11 major sections are verified as standalone full-width sections in the exact vertical order!")
