'use client';

import { Footer } from 'flowbite-react';

const footerStyle = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
};

export default function DefaultFooter() {
    return (
        <Footer container style={footerStyle}>
            <Footer.Copyright
                by="MergeMarkdown"
                href="#"
                year={2023}
            />
            <Footer.LinkGroup>
                <Footer.Link href="#">
                    About
                </Footer.Link>
                <Footer.Link href="#">
                    Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                    Licensing
                </Footer.Link>
                <Footer.Link href="#">
                    Contact
                </Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
}
